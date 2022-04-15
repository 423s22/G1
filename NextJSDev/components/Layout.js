import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Medical Transparency</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap"/>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"/>
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
