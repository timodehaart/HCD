import Link from "next/link";
import { NavMenu } from "@/components/nav-menu";
import { UserMenu } from "@/components/user-menu";

export async function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <NavMenu />
          <Link href="/" className="text-lg font-bold tracking-tight transition-colors hover:text-primary">
            Dezcartes
          </Link>
        </div>
        <UserMenu email={null} />
      </div>
    </header>
  );
}