import GlobalPagination from "@/components/GlobalPagination";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PaginationResponse } from "@/types/pagination";
import type { Post } from "@/types/post";
import { formatDate } from "@/utils/formatDate";
import {
  AlertCircleIcon,
  ArrowUpRight01Icon,
  NewspaperIcon,
  RefreshIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router";

interface BlogListSectionProps {
  blogs?: PaginationResponse<Post>;
  isPending: boolean;
  isError: boolean;
  search: string;
  isAuthenticated: boolean;
  onRetry: () => void;
  onClearSearch: () => void;
  onPageChange: (page: number) => void;
}

function BlogListSection({
  blogs,
  isPending,
  isError,
  search,
  isAuthenticated,
  onRetry,
  onClearSearch,
  onPageChange,
}: BlogListSectionProps) {
  const stories = blogs?.data ?? [];
  const totalPage = blogs?.meta
    ? Math.ceil(blogs.meta.total / blogs.meta.take)
    : 0;
  const hasSearch = search.trim().length > 0;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="flex flex-col gap-3 border-b border-border/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {hasSearch ? "Search results" : "Fresh off the press"}
          </p>
          <h2 className="mt-2 break-words text-3xl font-semibold tracking-tight sm:text-4xl">
            {hasSearch ? (
              <>
                Results for{" "}
                <span className="text-muted-foreground">
                  &ldquo;{search}&rdquo;
                </span>
              </>
            ) : (
              "Latest stories"
            )}
          </h2>
        </div>

        {!isPending && !isError ? (
          <p className="shrink-0 text-sm text-muted-foreground">
            {blogs?.meta.total ?? 0}{" "}
            {(blogs?.meta.total ?? 0) === 1 ? "story" : "stories"}
          </p>
        ) : null}
      </div>

      {isPending ? (
        <div>
          <div
            aria-hidden="true"
            className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="aspect-[16/10] animate-pulse bg-muted" />
                <div className="space-y-3 p-5">
                  <div className="h-5 w-4/5 animate-pulse rounded bg-muted" />
                  <div className="h-5 w-3/5 animate-pulse rounded bg-muted" />
                  <div className="h-3 w-full animate-pulse rounded bg-muted" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-muted" />
                  <div className="mt-6 h-3 w-1/3 animate-pulse rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
          <p role="status" className="sr-only">
            Loading stories
          </p>
        </div>
      ) : isError ? (
        <div
          role="alert"
          className="mt-10 flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/20 px-6 py-20 text-center"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <HugeiconsIcon icon={AlertCircleIcon} size={22} />
          </span>
          <h3 className="text-xl font-semibold tracking-tight">
            Couldn&rsquo;t load stories
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Something went wrong while fetching the archive. Please try again.
          </p>
          <Button variant="outline" onClick={onRetry} className="mt-1">
            <HugeiconsIcon icon={RefreshIcon} size={14} />
            Try again
          </Button>
        </div>
      ) : stories.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/20 px-6 py-20 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <HugeiconsIcon
              icon={hasSearch ? Search01Icon : NewspaperIcon}
              size={22}
            />
          </span>
          <h3 className="text-xl font-semibold tracking-tight">
            {hasSearch ? "No stories found" : "No stories yet"}
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {hasSearch
              ? `We couldn't find anything matching "${search}". Try a different title.`
              : "The archive is waiting for its first story."}
          </p>
          {hasSearch ? (
            <Button variant="outline" onClick={onClearSearch} className="mt-1">
              Clear search
            </Button>
          ) : isAuthenticated ? (
            <Link
              to="/write"
              className={buttonVariants({ size: "sm", className: "mt-1" })}
            >
              Write the first story
            </Link>
          ) : null}
        </div>
      ) : (
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((blog) => (
            <Link
              key={blog.slug}
              to={`/blogs/${blog.slug}`}
              className="group block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            >
              <Card className="h-full gap-0 overflow-hidden py-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:ring-foreground/20 [--card-spacing:--spacing(5)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  {blog.thumbnail ? (
                    <img
                      src={blog.thumbnail}
                      alt={`${blog.title} cover image`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-muted to-secondary">
                      <HugeiconsIcon
                        icon={NewspaperIcon}
                        size={40}
                        className="text-muted-foreground/50"
                      />
                    </div>
                  )}

                  <Badge
                    variant="secondary"
                    className="absolute left-4 top-4 border border-border/60 bg-background/90 uppercase tracking-wide text-foreground backdrop-blur"
                  >
                    {blog.category}
                  </Badge>
                </div>

                <CardHeader className="gap-2.5 pb-4 pt-5">
                  <CardTitle className="line-clamp-2 text-lg font-semibold leading-snug tracking-tight decoration-1 underline-offset-4 group-hover:underline">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                    {blog.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto flex items-center justify-between gap-3 border-t border-border/60 py-4">
                  <div className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
                    <span className="truncate font-medium text-foreground">
                      {blog.user.name}
                    </span>
                    <span aria-hidden="true">/</span>
                    <time
                      dateTime={new Date(blog.createdAt).toISOString()}
                      className="shrink-0"
                    >
                      {formatDate(blog.createdAt)}
                    </time>
                  </div>

                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={16}
                    className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {!isPending && !isError && blogs && totalPage > 1 ? (
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-border/80 pt-8">
          <GlobalPagination
            currentPage={blogs.meta.page}
            totalPage={totalPage}
            onChangePage={onPageChange}
          />
          <p className="text-xs text-muted-foreground">
            Page {blogs.meta.page} of {totalPage}
          </p>
        </div>
      ) : null}
    </section>
  );
}

export default BlogListSection;
