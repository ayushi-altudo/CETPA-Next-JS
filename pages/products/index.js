import React from "react";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps = async () => {
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
    <div className="container mt-5 mb-5">
      <h2>This is Products Page</h2>

      <div className="row">
        {productData.map((item) => (
          <div className="col-md-3 mt-3 mb-3">
            <div className="card h-100 text-center">
              <Image
                className="m-auto"
                src={item.image}
                alt="Product image"
                width={200}
                height={200}
              />
              <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <span>
                  <strong>Price:&nbsp;</strong>${item.price}
                </span>
              </div>
              <div class="card-footer">
                <Link href={`products/${item.id}`}>View Product</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
