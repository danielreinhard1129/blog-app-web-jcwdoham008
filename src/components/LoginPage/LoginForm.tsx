import GoogleLoginButton from "@/components/LoginPage/GoogleLoginButton";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/api/auth/useLogin";
import { loginSchema, type LoginSchema } from "@/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EyeClosedIcon,
  EyeIcon,
  LockPasswordIcon,
  Login01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useLogin();

  const handleLogin = (values: LoginSchema) => {
    mutate(values);
  };

  return (
    <section
      aria-labelledby="login-heading"
      className="mx-auto w-full max-w-md rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8 lg:max-w-none"
    >
      <div className="flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        <span>Member access</span>
        <span className="h-px w-8 bg-border" />
        <span>The Journal</span>
      </div>

      <h1
        id="login-heading"
        className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Sign in
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Enter your email and password to continue.
      </p>

      <form onSubmit={form.handleSubmit(handleLogin)} noValidate className="mt-8">
        <FieldGroup className="gap-5">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="login-email">Email</FieldLabel>
                <div className="relative">
                  <HugeiconsIcon
                    icon={Mail01Icon}
                    size={18}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    {...field}
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={fieldState.invalid}
                    className="h-11 rounded-lg pl-10 text-sm md:text-sm"
                  />
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex items-center justify-between gap-3">
                  <FieldLabel htmlFor="login-password">Password</FieldLabel>
                  <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <HugeiconsIcon
                    icon={LockPasswordIcon}
                    size={18}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    {...field}
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password"
                    autoComplete="current-password"
                    aria-invalid={fieldState.invalid}
                    className="h-11 rounded-lg pl-10 pr-11 text-sm md:text-sm"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((visible) => !visible)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <HugeiconsIcon
                      icon={showPassword ? EyeClosedIcon : EyeIcon}
                      size={18}
                    />
                  </Button>
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Button
          type="submit"
          disabled={isPending}
          className="mt-6 h-11 w-full gap-2 text-sm"
        >
          <HugeiconsIcon icon={Login01Icon} size={16} data-icon="inline-start" />
          {isPending ? "Signing in..." : "Sign in"}
        </Button>

        <div className="my-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            or continue with
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <GoogleLoginButton className="h-11 w-full text-sm" />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          New here?{" "}
          <Link
            to="/register"
            className="font-medium text-foreground underline underline-offset-4 decoration-border transition-colors hover:decoration-foreground"
          >
            Create an account
          </Link>
        </p>
      </form>
    </section>
  );
}

export default LoginForm;
