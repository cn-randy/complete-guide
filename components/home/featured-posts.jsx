import classes from "./featured-posts.module.css";
import PostGrid from "../posts/post-grid";

const FeaturedPosts = function ({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      {posts?.length > 0 && <PostGrid posts={posts} />}
    </section>
  );
};

export default FeaturedPosts;
