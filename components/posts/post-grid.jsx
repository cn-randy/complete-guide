import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

const PostGrid = function ({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts?.length > 0 &&
        posts.map((post) => <PostItem key={post.slug} post={post} />)}
    </ul>
  );
};

export default PostGrid;
