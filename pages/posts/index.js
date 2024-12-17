import Head from "next/head";

import AllPosts from "@/components/posts/all-posts";
import { getAllPost } from "@/lib/posts-util";
import { Fragment } from "react";

export default function AllPostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A List Of It All" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPost();

  return {
    props: {
      posts: allPosts,
    },
  };
}
