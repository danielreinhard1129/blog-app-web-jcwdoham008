import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-4xl">Not Found Page</h1>

      <Link to="/">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;

// rfce
// rafce -> arrow function
// rfc
