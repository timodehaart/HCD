import Link from "next/link";

import { createClient } from "@/lib/supabase/server";
import { NavMenu } from "@/components/nav-menu";
import { UserMenu } from "@/components/user-menu";

/**
 * Global navigation bar. Server component so it can read the current Supabase
 * session and render the correct auth state without a client round-trip.
 */
export async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <NavMenu />
          <Link
            href="/"
            className="text-lg font-bold tracking-tight transition-colors hover:text-primary"
          >
            Dezcartes
          </Link>
        </div>

        <UserMenu email={user?.email ?? null} />
      </div>
    </header>
  );
}
