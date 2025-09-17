
import { useParams, Navigate } from "react-router-dom";
import { blogPosts } from "./index";

export default function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find(({ metadata }) => metadata.slug === slug);

  if (!post) {
    return <Navigate to="/blog" />; // Redirect if not found
  }

  const PostComponent = post.Component;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <PostComponent />
    </div>
  );
}
