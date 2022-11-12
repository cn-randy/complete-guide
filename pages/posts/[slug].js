import { Fragment } from "react";
import PostContent from "../../components/posts/post-content";
import { getPostData, getPostsFiles } from "../../utils/posts-util";
import matter from "gray-matter";
import Head from "next/head";

const SinglePostPage = function (props) {
  return (
    <Fragment>
      <Head>
        <meta name="description" content={props.post.excerpt} />
        <title>{props.post.title}</title>
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
};

export default SinglePostPage;

/******************************************************************************
 *!                               SERVER SIDE                                 *
 *****************************************************************************/

export const getStaticPaths = function () {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export const getStaticProps = function (context) {
  const postData = getPostData(context.params.slug);
  const post = {
    ...postData,
    slug: context.params.slug,
  };

  return {
    props: {
      post,
    },
    revalidate: 600,
    notFound: !postData,
  };
};
