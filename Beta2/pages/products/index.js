import axios from "axios";
import { useRouter } from "next/router";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";

export default function Home({ productList }) {
  return (
    <div>
      <h1 className="text-center pt-10">Radiology</h1>
      <ProductForm />
      <ProductList productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  // const res = await axios.get("http://localhost:3000/api/products");
  const res = await axios.get(
    "https://cranky-banach-68238c.netlify.app/api/products"
  );

  return {
    props: {
      productList: res.data,
    },
  };
};
