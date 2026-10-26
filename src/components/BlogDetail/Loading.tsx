function Loading() {
  return (
    <div className="container mx-auto my-16 px-6">
      <div aria-hidden="true" className="space-y-4">
        <div className="h-6 w-24 animate-pulse rounded-full bg-muted" />

        <div className="space-y-3">
          <div className="h-9 w-4/5 animate-pulse rounded bg-muted md:h-10" />
          <div className="h-9 w-2/3 animate-pulse rounded bg-muted md:h-10" />
        </div>

        <div className="h-4 w-48 animate-pulse rounded bg-muted" />

        <div className="h-48 w-full animate-pulse rounded-sm bg-muted md:h-100" />

        <div className="space-y-2 pt-2">
          <div className="h-5 w-full animate-pulse rounded bg-muted" />
          <div className="h-5 w-11/12 animate-pulse rounded bg-muted" />
          <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
        </div>

        <div className="h-px w-full bg-border" />

        <div className="space-y-3 pt-2">
          <div className="h-6 w-1/3 animate-pulse rounded bg-muted" />
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
        </div>
      </div>

      <p role="status" className="sr-only">
        Loading blog
      </p>
    </div>
  );
}

export default Loading;
