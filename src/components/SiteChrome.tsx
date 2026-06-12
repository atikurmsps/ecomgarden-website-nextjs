"use client";

import { usePathname } from "next/navigation";

/**
 * Hides site-wide chrome (Header/Footer) on funnel landing pages (/lp/*)
 * so ad traffic has no navigation escape routes.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/lp/")) return null;
  return <>{children}</>;
}
