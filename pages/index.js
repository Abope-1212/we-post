import { Fragment } from "react";
import Head from "next/head";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

import { getFeaturedPosts } from "@/lib/posts-util";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>WE ARE THE BEST</title>
        <meta name="description" content="I POST TO MAKE People Learn" />
      </Head>
      <Hero />

      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
