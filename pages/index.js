import { Fragment } from "react";

import Hero from "../components/home/hero";
import FeaturedPosts from "../components/home/featured-posts";
import { getFeaturedPosts } from "../utils/posts-util";
import Head from "next/head";

const HomePage = function (props) {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="I post about programming and web development."
        />
        <title>Fred&#39;s Featured Posts</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps = function () {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};
