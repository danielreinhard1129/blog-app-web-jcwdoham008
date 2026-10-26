import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginPage/LoginForm";
import LoginHero from "@/components/LoginPage/LoginHero";
import Navbar from "@/components/Navbar";

function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <LoginHero />
          <LoginForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LoginPage;
