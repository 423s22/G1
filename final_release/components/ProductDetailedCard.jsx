//import Image from "next/image";
//import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductDetailedCard = ({ product }) => {
  return (
    <div className="mt-10 bg-white w-1/2 mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
      <img className="h-52 sm:h-full sm:w-72 rounded-xl " src={product.img} />

      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className=" w-full h-14 rounded-2xl">
            <h1 className="text-center">{product.title}</h1>
          </div>
          <p className="text-center">{product.desc}</p>
          <p className="text-center">{product.secondary_desc}</p>
          <p className="text-center">
            {product.CPT[0]}, {product.CPT[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailedCard;
