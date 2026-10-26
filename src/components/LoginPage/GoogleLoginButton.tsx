import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { cn } from "@/lib/utils";
import { useAuth } from "@/stores/useAuth";
import { GoogleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { toast } from "sonner";

interface GoogleLoginButtonProps {
  className?: string;
}

function GoogleLoginButton({ className }: GoogleLoginButtonProps) {
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLoginGoogle = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      try {
        const response = await axiosInstance.post("/auth/google", {
          accessToken: access_token,
        });

        login({
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          role: response.data.user.role,
          profilePic: response.data.user.profilePic,
        });

        navigate("/");
      } catch {
        toast.error("Login with Google Failed!");
      }
    },
  });

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => handleLoginGoogle()}
      className={cn("gap-2", className)}
    >
      <HugeiconsIcon icon={GoogleIcon} size={16} data-icon="inline-start" />
      Continue with Google
    </Button>
  );
}

export default GoogleLoginButton;
