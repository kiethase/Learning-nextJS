import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from '../../components/layout';
import ImageComponent from "./ImageComponents";
import Alert from "../../components/alert";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>Hello this is first post!</h1>
      <ImageComponent />
        <Alert type="success">Success view first post</Alert>
    </Layout>
  );
};

export default FirstPost;
