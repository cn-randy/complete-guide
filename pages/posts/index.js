import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../utils/posts-util";
import { Fragment } from "react";
import Head from "next/head";

const AllPostsPage = function (props) {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="A list of al programming tutorials and posts."
        />
        <title>All Posts</title>
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export default AllPostsPage;

export const getStaticProps = function () {
  const allPosts = getAllPosts();

  return {
    props: { posts: allPosts },
  };
};
