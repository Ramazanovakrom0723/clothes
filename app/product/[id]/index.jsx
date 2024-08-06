// // pages/products/[id].js
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { getProductDetailsApi } from "../../service/auth.product";
// import Image from "next/image";
// import { useParams } from 'next/navigation';

// const ProductDetail = () => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await getProductDetailsApi(id);
//         if (response.status === 200) {
//           setProduct(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!product) return <div>Product not found</div>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">{product.product_name}</h1>
//       <Image src={product.image_url[1]} alt={product.product_name} width={500} height={500} />
//       <p className="mt-2 text-gray-700">{product.description}</p>
//       <p className="mt-2 text-xl font-bold">{product.cost} UZS</p>
//       <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-md">Add to Cart</button>
//     </div>
//   );
// };

// export default ProductDetail;
