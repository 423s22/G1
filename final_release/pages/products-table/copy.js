import axios from "axios";
import { connectToDatabase } from "../../utils/mongodb";
//import ProductTable from "../../components/ProductForm";

//import ProductList from "../../components/ProductList";
export default function Home({ products }) {
  console.log(products);
  return (
    <div>
      <h1 className="text-center pt-10">Radiology</h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 ">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    {products.map((product) => {
                      return (
                        <td
                          key={product._id}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                          {product.title}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export const getServerSideProps = async () => {
//   // const res = await axios.get("http://localhost:3000/api/products");
//   const res = await axios.get(
//     `https://cranky-banach-68238c.netlify.app/api/products?q=${context.query.term}`
//   );
//   console.log(res);
//   return {
//     props: {
//       products: res.data,
//     },
//   };

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();
  return {
    props: {
      isConnected,
    },
  };
}
