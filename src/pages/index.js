// React
import React from "react";

// Docusaurus
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

// Components
import Home from "../components/Home/Home";

const index = () => {
  return (
    <Layout>
      <Head>
        <meta property="og:description" content="My custom description" />
      </Head>
      <Home />
    </Layout>
  );
};

export default index;
