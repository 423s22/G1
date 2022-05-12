//import Image from "next/image";
//import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 rounded-lg border-2 border-gray-100 drop-shadow-md shadow-black-100">
      <div className="p-4">
        <div className="text-center mb-4 opacity-90">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLineCap="round"
              strokeLineJoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              {product.title}
            </h2>
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug VHS try-hard.
            </p>
            <Link href={`/products/${product._id}`} passHref>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLineCap="round"
                  strokeLineJoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
