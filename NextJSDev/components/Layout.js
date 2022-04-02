import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Medical Transparency</title>
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;
