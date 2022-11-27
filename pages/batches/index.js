import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: { productData: data },
  };
};

const Products = (props) => {
  console.log("props", props);
  const { productData } = props;
  return (
    <div className="container">
      <h2>This is Batches Page</h2>

     
        {productData.map((item) => (
         <div><Link href={`batches/${item.id}`}>{item.title}</Link></div>
        ))}
     
    </div>
  );
};

export default Products;
