import { buttonVariants } from "@/components/ui/button";
import {
  ArrowLeft01Icon,
  FileNotFoundIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="container mx-auto my-16 px-6">
      <div
        role="alert"
        className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/20 px-6 py-20 text-center"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <HugeiconsIcon icon={FileNotFoundIcon} size={22} />
        </span>

        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Blog not found
        </h1>

        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          The story you&rsquo;re looking for may have been moved, unpublished, or
          never existed.
        </p>

        <Link
          to="/"
          className={buttonVariants({ size: "sm", className: "mt-1" })}
        >
          <HugeiconsIcon
            icon={ArrowLeft01Icon}
            size={14}
            data-icon="inline-start"
          />
          Back to homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
