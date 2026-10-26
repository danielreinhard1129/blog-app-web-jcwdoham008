import { formatMonthYear } from "@/utils/formatDate";

function LoginHero() {
  const issueDate = formatMonthYear(new Date());

  return (
    <aside
      aria-label="About The Journal"
      className="hidden lg:flex lg:flex-col lg:justify-center"
    >
      <div className="flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        <span>Vol. 01</span>
        <span className="h-px w-8 bg-border" />
        <span>{issueDate}</span>
      </div>

      <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.02] tracking-tight xl:text-6xl">
        Welcome back.{" "}
        <span className="text-muted-foreground">
          Your next story starts here.
        </span>
      </h2>

      <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
        Sign in to continue reading the archive, publish new essays, and keep
        your place in The Journal.
      </p>

      <div className="mt-10 max-w-lg rounded-2xl border border-border/80 bg-muted/30 p-6">
        <p className="text-sm leading-relaxed text-foreground">
          &ldquo;Every story begins with someone willing to read it.&rdquo;
        </p>
        <p className="mt-3 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          A note from the editors
        </p>
      </div>
    </aside>
  );
}

export default LoginHero;
