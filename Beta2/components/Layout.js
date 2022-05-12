import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Medical Transparency</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
