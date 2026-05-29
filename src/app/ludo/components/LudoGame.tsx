'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import LudoBoard from './LudoBoard';
import Dice from './Dice';
import {
  GameState,
  PlayerColor,
  createInitialState,
  rollDice,
  handleDiceRoll,
  applyMove,
  getMovablePieces,
  getBotMove,
} from '../gameEngine';

const PLAYER_COLORS: PlayerColor[] = ['red', 'green', 'yellow', 'blue'];

const COLOR_STYLES: Record<PlayerColor, { bg: string; light: string; ring: string; label: string }> = {
  red:    { bg: 'bg-red-500',    light: 'bg-red-50',    ring: 'ring-red-500',    label: 'Red' },
  green:  { bg: 'bg-green-500',  light: 'bg-green-50',  ring: 'ring-green-500',  label: 'Green' },
  yellow: { bg: 'bg-yellow-400', light: 'bg-yellow-50', ring: 'ring-yellow-400', label: 'Yellow' },
  blue:   { bg: 'bg-blue-500',   light: 'bg-blue-50',   ring: 'ring-blue-500',   label: 'Blue' },
};

type SetupConfig = {
  humanColors: PlayerColor[];
  botColors: PlayerColor[];
};

export default function LudoGame() {
  const [setup, setSetup] = useState<SetupConfig | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const botTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startGame = (config: SetupConfig) => {
    setSetup(config);
    setGameState(createInitialState(config.humanColors, config.botColors));
  };

  const resetGame = () => {
    if (botTimerRef.current) clearTimeout(botTimerRef.current);
    setSetup(null);
    setGameState(null);
    // rolling state is managed inside Dice component
  };

  const movablePieces = gameState && gameState.phase === 'moving'
    ? getMovablePieces(gameState)
    : [];

  const onDiceRolled = useCallback((value: number) => {
    if (!gameState || gameState.phase !== 'rolling') return;
    const newState = handleDiceRoll(gameState, value);
    setGameState(newState);
  }, [gameState]);

  // Auto-advance when no moves
  useEffect(() => {
    if (!gameState || gameState.phase !== 'moving') return;
    const movable = getMovablePieces(gameState);
    if (movable.length === 0) {
      botTimerRef.current = setTimeout(() => {
        setGameState((prev: GameState | null) => {
          if (!prev) return prev;
          const players = prev.players;
          const nextIdx = (prev.currentPlayerIndex + 1) % 4;
          const next = players[nextIdx];
          return {
            ...prev,
            currentPlayerIndex: nextIdx,
            phase: 'rolling' as const,
            diceValue: null,
            consecutiveSixes: 0,
            message: `${next.name}'s turn - Roll the dice!`,
          };
        });
      }, 1000);
    }
  }, [gameState]);

  // Bot turn handler
  useEffect(() => {
    if (!gameState || gameState.phase === 'finished') return;
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    if (!currentPlayer.isBot) return;

    if (gameState.phase === 'rolling') {
      botTimerRef.current = setTimeout(() => {
        const val = rollDice();
        setGameState((prev: GameState | null) => prev ? handleDiceRoll(prev, val) : prev);
      }, 1000);
    } else if (gameState.phase === 'moving') {
      const movable = getMovablePieces(gameState);
      if (movable.length > 0) {
        botTimerRef.current = setTimeout(() => {
          const best = getBotMove(gameState);
          if (best) {
            setGameState((prev: GameState | null) => prev ? applyMove(prev, best) : prev);
          }
        }, 900);
      }
    }

    return () => { if (botTimerRef.current) clearTimeout(botTimerRef.current); };
  }, [gameState]);

  const handlePieceClick = (pieceId: string) => {
    if (!gameState || gameState.phase !== 'moving') return;
    const current = gameState.players[gameState.currentPlayerIndex];
    if (current.isBot) return;
    if (!movablePieces.includes(pieceId)) return;
    setGameState(applyMove(gameState, pieceId));
  };

  if (!setup || !gameState) {
    return <SetupScreen onStart={startGame} />;
  }

  if (gameState.phase === 'finished') {
    const winner = gameState.players.find(p => p.color === gameState.winner);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-md">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-4xl font-bold mb-2">Game Over!</h1>
          <div className={`inline-block px-6 py-2 rounded-full text-white text-xl font-bold mt-2 mb-6 ${COLOR_STYLES[gameState.winner!].bg}`}>
            {winner?.name} Wins!
          </div>
          <div className="space-y-2 mb-8">
            {gameState.players.map(p => (
              <div key={p.color} className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full ${COLOR_STYLES[p.color].bg}`} />
                <span className="font-medium">{p.name}</span>
                <span className="ml-auto text-gray-500">
                  {p.pieces.filter(pc => pc.status === 'finished').length}/4 pieces home
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={resetGame}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  const currentPlayer = gameState.players[gameState.currentPlayerIndex];
  const isHumanTurn = !currentPlayer.isBot;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 gap-4">
      <div className="flex items-center gap-4 w-full max-w-5xl">
        <h1 className="text-white text-3xl font-bold tracking-wide">🎲 Ludo</h1>
        <button onClick={resetGame} className="ml-auto text-gray-400 hover:text-white text-sm border border-gray-600 hover:border-white px-3 py-1 rounded-lg transition-colors">
          New Game
        </button>
      </div>

      <div className="flex gap-6 w-full max-w-5xl items-start">
        {/* Board */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700 shrink-0">
          <LudoBoard
            state={gameState}
            movablePieces={isHumanTurn ? movablePieces : []}
            onPieceClick={handlePieceClick}
          />
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4 min-w-[220px]">
          {/* Current turn */}
          <div className={`rounded-2xl p-4 shadow-lg border-2 ${COLOR_STYLES[currentPlayer.color].ring} ring-2 bg-white`}>
            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Current Turn</p>
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full ${COLOR_STYLES[currentPlayer.color].bg}`} />
              <span className="font-bold text-gray-800 text-lg">{currentPlayer.name}</span>
              {currentPlayer.isBot && <span className="text-xs bg-gray-200 text-gray-600 rounded px-1.5">BOT</span>}
            </div>
          </div>

          {/* Message */}
          <div className="bg-white/10 rounded-xl p-3 text-white text-sm text-center min-h-[50px] flex items-center justify-center">
            {gameState.message}
          </div>

          {/* Dice */}
          <div className="bg-white rounded-2xl p-4 flex flex-col items-center gap-3 shadow-lg">
            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Dice</p>
            <Dice
              value={gameState.diceValue}
              disabled={!isHumanTurn || gameState.phase !== 'rolling'}
              onRoll={onDiceRolled}
            />
            {isHumanTurn && gameState.phase === 'rolling' && (
              <p className="text-xs text-gray-500 animate-pulse">Click to roll!</p>
            )}
          </div>

          {/* Player status */}
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-3">Players</p>
            <div className="space-y-3">
              {gameState.players.map(player => (
                <div key={player.color} className={`flex items-center gap-2 p-2 rounded-lg ${player.color === currentPlayer.color ? COLOR_STYLES[player.color].light : ''}`}>
                  <div className={`w-3 h-3 rounded-full shrink-0 ${COLOR_STYLES[player.color].bg}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-gray-700 truncate">{player.name}</span>
                      {player.isBot && <span className="text-xs text-gray-400">🤖</span>}
                    </div>
                    <div className="flex gap-1 mt-0.5">
                      {player.pieces.map(piece => (
                        <div
                          key={piece.id}
                          className={`w-3 h-3 rounded-full border ${
                            piece.status === 'finished'
                              ? 'bg-gray-800 border-gray-800'
                              : piece.status === 'active'
                              ? `border-gray-400`
                              : 'bg-gray-200 border-gray-300'
                          }`}
                          style={piece.status === 'active' ? { backgroundColor: COLOR_STYLES[player.color].bg.replace('bg-','') } : {}}
                          title={piece.status}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 shrink-0">
                    {player.pieces.filter(p => p.status === 'finished').length}/4
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SetupScreen({ onStart }: { onStart: (c: SetupConfig) => void }) {
  const [selected, setSelected] = useState<Set<PlayerColor>>(new Set(['red']));

  const toggle = (c: PlayerColor) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(c)) {
        if (next.size > 1) next.delete(c);
      } else {
        next.add(c);
      }
      return next;
    });
  };

  const handleStart = () => {
    const humanColors = Array.from(selected) as PlayerColor[];
    const botColors = PLAYER_COLORS.filter(c => !selected.has(c));
    onStart({ humanColors, botColors });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🎲</div>
          <h1 className="text-4xl font-bold text-gray-800">Ludo</h1>
          <p className="text-gray-500 mt-2">Classic board game for 2-4 players</p>
        </div>

        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
            Your colors (bots play the rest)
          </p>
          <div className="grid grid-cols-2 gap-3">
            {PLAYER_COLORS.map(color => (
              <button
                key={color}
                onClick={() => toggle(color)}
                className={`
                  flex items-center gap-3 p-3 rounded-xl border-2 transition-all font-medium
                  ${selected.has(color)
                    ? `border-current ${COLOR_STYLES[color].bg} text-white shadow-md scale-105`
                    : 'border-gray-200 text-gray-700 hover:border-gray-300 bg-gray-50'}
                `}
              >
                <div className={`w-5 h-5 rounded-full ${selected.has(color) ? 'bg-white/30' : COLOR_STYLES[color].bg}`} />
                {COLOR_STYLES[color].label}
                {selected.has(color) && <span className="ml-auto">✓</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 mb-6 text-sm text-gray-600">
          <strong>{selected.size}</strong> human player{selected.size !== 1 ? 's' : ''} ·{' '}
          <strong>{4 - selected.size}</strong> bot{4 - selected.size !== 1 ? 's' : ''}
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg"
        >
          Start Game 🎯
        </button>

        <div className="mt-6 text-xs text-gray-400 space-y-1">
          <p>• Roll 6 to move a piece out of home base</p>
          <p>• Land on opponent's piece to send it home</p>
          <p>• Get all 4 pieces to the center to win</p>
        </div>
      </div>
    </div>
  );
}
