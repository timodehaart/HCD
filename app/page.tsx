import Link from "next/link";
import {
  Layers,
  Swords,
  Sparkles,
  Upload,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";

type EngagementLevel = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const ENGAGEMENT_LEVELS: EngagementLevel[] = [
  {
    title: "Collect",
    description:
      "Build and browse your library. Open packs and scan physical cards into your digital collection.",
    icon: Layers,
  },
  {
    title: "Play",
    description:
      "Jump into matches and take on challenges and puzzles that test your decks and your wits.",
    icon: Swords,
  },
  {
    title: "Create",
    description:
      "Design your own cards, decks, and puzzles with tools built for the Dezcartes universe.",
    icon: Sparkles,
  },
  {
    title: "Publish",
    description:
      "Share your creations with the community and bring your ideas into everyone's collection.",
    icon: Upload,
  },
];

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="container flex flex-col items-center gap-16 py-12 sm:py-20 md:gap-24 md:py-28">
      {/* Hero */}
      <section className="flex max-w-3xl flex-col items-center text-center">
        <span className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground">
          The Dezcartes Digital Platform
        </span>
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Collect, play, and create in the world of Dezcartes
        </h1>
        <p className="mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          One home for your cards — open packs, scan your collection, battle
          through gameplay and puzzles, and publish creations of your own.
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          {user ? (
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/collection">
                Enter the platform
                <ArrowRight />
              </Link>
            </Button>
          ) : (
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/login">
                Log in / Sign up
                <ArrowRight />
              </Link>
            </Button>
          )}
        </div>
      </section>

      {/* Engagement levels */}
      <section className="w-full max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Four ways to engage
          </h2>
          <p className="mt-2 text-muted-foreground">
            However you like to play, there&apos;s a place for you here.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENT_LEVELS.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 text-card-foreground transition-colors hover:border-primary/40"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
