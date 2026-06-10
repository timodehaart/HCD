import {
  Library,
  PackageOpen,
  ScanLine,
  Gamepad2,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

/**
 * Platform sections shown in the global navbar menu.
 *
 * Some of these routes are owned by other teammates and may not exist on
 * `main` yet — the links intentionally point at the agreed-upon paths
 * regardless so navigation is wired up ahead of time.
 */
export const NAV_LINKS: NavLink[] = [
  { label: "Collection / Library", href: "/collection", icon: Library },
  { label: "Opening Packs", href: "/packs", icon: PackageOpen },
  { label: "Card Scanner", href: "/scanner", icon: ScanLine },
  { label: "Gameplay", href: "/gameplay", icon: Gamepad2 },
  { label: "Challenges & Puzzles", href: "/puzzles", icon: Puzzle },
];
