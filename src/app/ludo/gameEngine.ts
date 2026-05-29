// Ludo Game Engine - Core Algorithm

export type PlayerColor = 'red' | 'green' | 'yellow' | 'blue';
export type PieceStatus = 'home' | 'active' | 'finished';

export interface Piece {
  id: string;
  color: PlayerColor;
  index: number; // 0-3 within color
  position: number; // -1 = home base, 0-56 = track, 57 = finished
  status: PieceStatus;
}

export interface Player {
  color: PlayerColor;
  name: string;
  isBot: boolean;
  pieces: Piece[];
}

export type GamePhase = 'waiting' | 'rolling' | 'moving' | 'finished';

export interface GameState {
  players: Player[];
  currentPlayerIndex: number;
  diceValue: number | null;
  diceRolling: boolean;
  phase: GamePhase;
  winner: PlayerColor | null;
  consecutiveSixes: number;
  message: string;
  canRollAgain: boolean;
}

// Board path: 52 main cells (0-51) + 6 home column cells per color (52-57)
// Each color starts at a fixed offset on the main track
export const COLOR_START_POSITIONS: Record<PlayerColor, number> = {
  red: 0,
  green: 13,
  yellow: 26,
  blue: 39,
};

export const COLOR_SAFE_ZONE_ENTRY: Record<PlayerColor, number> = {
  red: 51,
  green: 12,
  yellow: 25,
  blue: 38,
};

export const HOME_COLUMN_START = 52; // positions 52-57 are color-specific home column

// Safe squares on main track (star positions)
export const SAFE_SQUARES = new Set([0, 8, 13, 21, 26, 34, 39, 47]);

export function createInitialState(playerColors: PlayerColor[], botColors: PlayerColor[]): GameState {
  const allColors: PlayerColor[] = ['red', 'green', 'yellow', 'blue'];
  const players: Player[] = allColors.map((color, i) => ({
    color,
    name: color.charAt(0).toUpperCase() + color.slice(1),
    isBot: botColors.includes(color),
    pieces: Array.from({ length: 4 }, (_, idx) => ({
      id: `${color}-${idx}`,
      color,
      index: idx,
      position: -1,
      status: 'home' as PieceStatus,
    })),
  }));

  return {
    players,
    currentPlayerIndex: 0,
    diceValue: null,
    diceRolling: false,
    phase: 'rolling',
    winner: null,
    consecutiveSixes: 0,
    message: `${players[0].name}'s turn - Roll the dice!`,
    canRollAgain: false,
  };
}

export function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}

// Convert piece position to board coordinate index
// Returns absolute track index (0-51 for main, 52-57 for home column)
export function getAbsolutePosition(piece: Piece): number {
  if (piece.status === 'home') return -1;
  if (piece.status === 'finished') return 58;
  return piece.position;
}

// Get movable pieces for current player given dice value
export function getMovablePieces(state: GameState): string[] {
  const player = state.players[state.currentPlayerIndex];
  if (state.diceValue === null) return [];

  const movable: string[] = [];

  for (const piece of player.pieces) {
    if (piece.status === 'finished') continue;

    if (piece.status === 'home') {
      if (state.diceValue === 6) movable.push(piece.id);
      continue;
    }

    // Active piece - check if move is valid
    const newPos = calculateNewPosition(piece, state.diceValue);
    if (newPos !== null) movable.push(piece.id);
  }

  return movable;
}

// Calculate new position after moving, returns null if invalid
export function calculateNewPosition(piece: Piece, steps: number): number | null {
  if (piece.status === 'home') {
    if (steps === 6) return COLOR_START_POSITIONS[piece.color];
    return null;
  }

  const startPos = COLOR_START_POSITIONS[piece.color];
  const safeEntryTrackPos = COLOR_SAFE_ZONE_ENTRY[piece.color];

  // Current track offset from start
  let currentOffset: number;
  if (piece.position >= HOME_COLUMN_START) {
    // Already in home column (52-57 mapped to offset 52-57)
    const homeColPos = piece.position - HOME_COLUMN_START; // 0-5
    const newHomeColPos = homeColPos + steps;
    if (newHomeColPos > 5) return null; // Can't overshoot
    if (newHomeColPos === 5) return 58; // Finished
    return HOME_COLUMN_START + newHomeColPos;
  }

  // On main track - calculate offset from this color's start
  currentOffset = (piece.position - startPos + 52) % 52;
  const newOffset = currentOffset + steps;

  // Check if entering home column (offset 51 = safeEntryTrackPos)
  if (newOffset >= 52) {
    // Would enter home column
    const homeColSteps = newOffset - 52;
    if (homeColSteps > 5) return null; // Overshoot
    if (homeColSteps === 5) return 58; // Finished
    return HOME_COLUMN_START + homeColSteps;
  }

  return (startPos + newOffset) % 52;
}

// Apply a move: move piece, check captures, check win
export function applyMove(state: GameState, pieceId: string): GameState {
  const newState = deepCloneState(state);
  const player = newState.players[newState.currentPlayerIndex];
  const piece = player.pieces.find(p => p.id === pieceId)!;
  const diceValue = newState.diceValue!;

  const newPos = calculateNewPosition(piece, diceValue);
  if (newPos === null) return state;

  // Move piece out of home
  if (piece.status === 'home' && diceValue === 6) {
    piece.position = COLOR_START_POSITIONS[piece.color];
    piece.status = 'active';
  } else if (newPos === 58) {
    piece.position = 58;
    piece.status = 'finished';
  } else {
    piece.position = newPos;
    piece.status = 'active';
  }

  let captured = false;
  let extraTurn = diceValue === 6;

  // Check capture: if on main track and not safe
  if (piece.status === 'active' && piece.position < HOME_COLUMN_START && !SAFE_SQUARES.has(piece.position)) {
    for (const otherPlayer of newState.players) {
      if (otherPlayer.color === player.color) continue;
      for (const otherPiece of otherPlayer.pieces) {
        if (otherPiece.status === 'active' && otherPiece.position === piece.position) {
          otherPiece.position = -1;
          otherPiece.status = 'home';
          captured = true;
          extraTurn = true;
        }
      }
    }
  }

  // Check win
  const allFinished = player.pieces.every(p => p.status === 'finished');
  if (allFinished) {
    newState.winner = player.color;
    newState.phase = 'finished';
    newState.message = `${player.name} wins! 🎉`;
    return newState;
  }

  // Determine next turn
  if (extraTurn) {
    newState.consecutiveSixes = diceValue === 6 ? newState.consecutiveSixes + 1 : 0;
    if (newState.consecutiveSixes >= 3) {
      // 3 sixes = lose turn
      newState.consecutiveSixes = 0;
      advanceTurn(newState);
    } else {
      newState.phase = 'rolling';
      newState.diceValue = null;
      newState.message = captured
        ? `${player.name} captured! Roll again!`
        : `${player.name} rolled 6! Roll again!`;
    }
  } else {
    newState.consecutiveSixes = 0;
    advanceTurn(newState);
  }

  return newState;
}

function advanceTurn(state: GameState): void {
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % 4;
  state.phase = 'rolling';
  state.diceValue = null;
  const nextPlayer = state.players[state.currentPlayerIndex];
  state.message = `${nextPlayer.name}'s turn - Roll the dice!`;
}

export function handleDiceRoll(state: GameState, value: number): GameState {
  const newState = deepCloneState(state);
  newState.diceValue = value;
  newState.diceRolling = false;

  const movable = getMovablePieces(newState);

  if (movable.length === 0) {
    // No moves possible
    if (value === 6) {
      newState.message = `${newState.players[newState.currentPlayerIndex].name} rolled 6 but no moves!`;
    } else {
      newState.message = `No moves possible. Passing turn.`;
    }
    // Auto-advance after brief delay (handled in UI)
    newState.phase = 'moving'; // signals UI to auto-advance
    newState.consecutiveSixes = 0;
    return newState;
  }

  newState.phase = 'moving';
  const player = newState.players[newState.currentPlayerIndex];
  newState.message = `${player.name} rolled ${value}. Choose a piece to move.`;

  return newState;
}

function deepCloneState(state: GameState): GameState {
  return JSON.parse(JSON.stringify(state));
}

// Bot AI: pick best piece to move
export function getBotMove(state: GameState): string | null {
  const movable = getMovablePieces(state);
  if (movable.length === 0) return null;

  const player = state.players[state.currentPlayerIndex];
  const diceValue = state.diceValue!;

  // Priority: capture > finish > move furthest > exit home
  let bestPiece: string | null = null;
  let bestScore = -Infinity;

  for (const pieceId of movable) {
    const piece = player.pieces.find(p => p.id === pieceId)!;
    const newPos = calculateNewPosition(piece, diceValue);
    if (newPos === null) continue;

    let score = 0;

    // Finishing
    if (newPos === 58) score += 1000;

    // Capturing
    if (newPos !== null && newPos < HOME_COLUMN_START && !SAFE_SQUARES.has(newPos)) {
      for (const op of state.players) {
        if (op.color === player.color) continue;
        if (op.pieces.some(p => p.status === 'active' && p.position === newPos)) {
          score += 500;
        }
      }
    }

    // Moving out of home
    if (piece.status === 'home') score += 100;

    // Prefer pieces further along
    if (piece.status === 'active') {
      const startPos = COLOR_START_POSITIONS[piece.color];
      const offset = piece.position >= HOME_COLUMN_START
        ? 52 + (piece.position - HOME_COLUMN_START)
        : (piece.position - startPos + 52) % 52;
      score += offset;
    }

    if (score > bestScore) {
      bestScore = score;
      bestPiece = pieceId;
    }
  }

  return bestPiece ?? movable[0];
}
