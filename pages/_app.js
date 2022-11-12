import "../styles/globals.css";
import Layout from "../components/layouts/layout";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Blog</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
