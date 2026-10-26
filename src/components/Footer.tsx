import { useAuth } from "@/stores/useAuth";
import { Link } from "react-router";

function Footer() {
  const { user } = useAuth();

  return (
    <footer className="border-t border-border/80 bg-muted/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-base font-semibold tracking-tight">The Journal</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Ideas, stories, and perspectives.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
        >
          <Link to="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/write" className="transition-colors hover:text-foreground">
            Write
          </Link>
          {!user ? (
            <Link
              to="/login"
              className="transition-colors hover:text-foreground"
            >
              Login
            </Link>
          ) : null}
        </nav>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} The Journal
        </p>
      </div>
    </footer>
  );
}

export default Footer;
