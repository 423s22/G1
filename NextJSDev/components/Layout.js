import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Medical Transparency</title>
    </Head>
    <Header />
    {children}
    <Footer/>
  </>
);

export default Layout;
