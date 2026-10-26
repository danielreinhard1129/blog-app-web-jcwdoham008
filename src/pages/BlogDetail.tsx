import Body from "@/components/BlogDetail/Body";
import Loading from "@/components/BlogDetail/Loading";
import NotFound from "@/components/BlogDetail/NotFound";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useGetPostBySlug from "@/hooks/api/post/useGetPostBySlug";
import { useParams } from "react-router";

function BlogDetail() {
  const params = useParams();

  const { data: blog, isPending } = useGetPostBySlug(params.slug);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {isPending ? <Loading /> : !blog ? <NotFound /> : <Body blog={blog} />}
      </main>

      <Footer />
    </div>
  );
}

export default BlogDetail;
