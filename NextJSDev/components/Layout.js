import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Medical Transparency</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/> 
    </Head>
    <Header />
    {children}
    <Footer/>
  </>
);

export default Layout;
