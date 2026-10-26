import Footer from "@/components/Footer";
import BlogListSection from "@/components/HomePage/BlogListSection";
import HeroSection from "@/components/HomePage/HeroSection";
import Navbar from "@/components/Navbar";
import useGetPosts from "@/hooks/api/post/useGetPosts";
import { useAuth } from "@/stores/useAuth";
import { parseAsInteger, useQueryState } from "nuqs";
import { useDebounceValue } from "usehooks-ts";

function HomePage() {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [debouncedSearch] = useDebounceValue(search, 700);

  const { user } = useAuth();

  const {
    data: blogs,
    isPending,
    isError,
    refetch,
  } = useGetPosts({
    page,
    search: debouncedSearch,
    take: 6,
  });

  const handleSearchChange = (value: string) => {
    setPage(1);
    setSearch(value);
  };

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearSearch = () => {
    setPage(1);
    setSearch("");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        <HeroSection
          search={search}
          onSearchChange={handleSearchChange}
          onClearSearch={clearSearch}
        />
        <BlogListSection
          blogs={blogs}
          isPending={isPending}
          isError={isError}
          search={debouncedSearch}
          isAuthenticated={!!user}
          onRetry={() => refetch()}
          onClearSearch={clearSearch}
          onPageChange={handlePageChange}
        />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
