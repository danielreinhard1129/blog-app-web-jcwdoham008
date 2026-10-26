import { Input } from "@/components/ui/input";
import { formatMonthYear } from "@/utils/formatDate";
import { Cancel01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface HeroSectionProps {
  search: string;
  onSearchChange: (value: string) => void;
  onClearSearch: () => void;
}

function HeroSection({
  search,
  onSearchChange,
  onClearSearch,
}: HeroSectionProps) {
  const issueDate = formatMonthYear(new Date());

  return (
    <section className="border-b border-border/80 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span>Vol. 01</span>
              <span className="h-px w-8 bg-border" />
              <span>{issueDate}</span>
            </div>

            <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Stories worth{" "}
              <span className="text-muted-foreground">reading.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Essays, notes, and perspectives on design, technology, and the
              craft of writing.
            </p>
          </div>

          <div className="w-full lg:pb-2">
            <label
              htmlFor="home-search"
              className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground"
            >
              Find a story
            </label>

            <div className="relative mt-2">
              <HugeiconsIcon
                icon={Search01Icon}
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                id="home-search"
                type="text"
                placeholder="Search by title..."
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                className="h-12 rounded-full border-border bg-background pl-11 pr-11 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-ring/40"
              />
              {search ? (
                <button
                  type="button"
                  onClick={onClearSearch}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <HugeiconsIcon icon={Cancel01Icon} size={16} />
                </button>
              ) : null}
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Search the archive by story title.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
