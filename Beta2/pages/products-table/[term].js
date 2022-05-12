// import axios from "axios";
// import mongodb from "../../utils/mongodb";
// //import ProductTable from "../../components/ProductForm";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useState } from "react";
// import { UserAddIcon } from "@heroicons/react/solid";

// //import ProductList from "../../components/ProductList";
// export default function Home({ services }) {
//   console.log(services);
//   const [products, setProducts] = useState([]);
//   const { query } = useRouter();

//   useEffect(async () => {
//     try {
//       const allServices = await user.function.searchServices(query.term);
//       setServices = await user.functions.searchServices();
//       setServices(() => searchServices);
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);

//   return (
//     <div>
//       <h1 className="text-center pt-10">Radiology</h1>

//       <div className="flex flex-col">
//         <div className="overflow-x-auto sm:-mx-6 ">
//           <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//             <div className="overflow-hidden">
//               <table className="min-w-full">
//                 <thead className="bg-white border-b">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//                     >
//                       Hospital
//                     </th>
//                     <th
//                       scope="col"
//                       className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//                     >
//                       Description
//                     </th>
//                     <th
//                       scope="col"
//                       className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//                     >
//                       Rate
//                     </th>
//                     <th
//                       scope="col"
//                       className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//                     >
//                       Procedure Number
//                     </th>
//                     <th
//                       scope="col"
//                       className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//                     >
//                       Charge Code
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {services.map((service) => {
//                     return (
//                       <tr
//                         key={service._id}
//                         className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
//                       >
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           {service.hosital}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           {service.description}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           {service.rate}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           {service.procedureNumber}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           {service.chargeCode}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// // export const getServerSideProps = async () => {
// //   // const res = await axios.get("http://localhost:3000/api/products");
// //   const res = await axios.get(
// //     `https://cranky-banach-68238c.netlify.app/api/products?term=${context.query.term}`
// //   );
// //   console.log(res);
// //   return {
// //     props: {
// //       products: res.data,
// //     },
// //   };
// // };
// export async function getServerSideProps(context) {
//   const { db } = await connectToDatabase();

//   const data = await db
//     .collection("services")
//     .find()
//     //.sort({ _id: 1 })
//     //.limit(40)
//     .toArray();

//   const services = data.map((service) => {
//     return {
//       hosital: service.hospital,
//       description: service.Description,
//       rate: service.Rate,
//       procedureNumber: service.ProcedureNumber,
//       chargeCode: service.ChargeCode,
//     };
//   });

//   return {
//     props: { services },
//   };
// }

// // export const getServerSideProps = async () => {
// //   // const res = await axios.get("http://localhost:3000/api/team");
// //   const res = await axios.get(
// //     "https://cranky-banach-68238c.netlify.app/api/products-table"
// //   );
// //   return {
// //     props: {
// //       services: res.data,
// //     },
// //   };
// // };
