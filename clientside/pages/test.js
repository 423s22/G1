import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
export default function test() {
  return (
    <div>
      <Head>
        <title>Medical Poopery</title>
      </Head>
      <Header />
      <p>hi!</p>
    </div>
  );
}

