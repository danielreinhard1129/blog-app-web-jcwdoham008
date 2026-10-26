import { Button, buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/stores/useAuth";
import { Add01Icon, Logout01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router";

function Navbar() {
  const { user, logout } = useAuth();

  const initials = user
    ? user.name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase()
    : "";

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
            J
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-tight">
              The Journal
            </span>
            <span className="mt-1 hidden text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Stories &amp; ideas
            </span>
          </span>
        </Link>

        <nav aria-label="Account" className="flex items-center gap-2">
          {user ? (
            <>
              <div className="hidden items-center gap-2.5 border-r border-border pr-4 sm:flex">
                {user.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt=""
                    className="size-8 rounded-full object-cover ring-1 ring-border"
                  />
                ) : (
                  <span className="flex size-8 items-center justify-center rounded-full bg-muted text-[0.7rem] font-semibold ring-1 ring-border">
                    {initials}
                  </span>
                )}
                <div className="max-w-40 leading-tight">
                  <p className="truncate text-xs font-medium">{user.name}</p>
                  <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                    Signed in
                  </p>
                </div>
              </div>

              <Link
                to="/write"
                aria-label="Create blog"
                className={buttonVariants({ size: "sm" })}
              >
                <HugeiconsIcon
                  icon={Add01Icon}
                  size={14}
                  data-icon="inline-start"
                />
                <span className="sr-only sm:not-sr-only">Create Blog</span>
              </Link>

              <Button variant="ghost" size="sm" onClick={logout}>
                <HugeiconsIcon
                  icon={Logout01Icon}
                  size={14}
                  data-icon="inline-start"
                />
                <span className="sr-only sm:not-sr-only">Logout</span>
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Login
              </Link>
              <Link to="/register" className={buttonVariants({ size: "sm" })}>
                Get started
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
