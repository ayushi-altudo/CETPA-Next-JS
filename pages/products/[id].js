import React from "react";
import Image from "next/image";
import styles from "../../styles/ProductDetail.module.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(process.env.API_URL + id);
  const data = await response.json();
  return {
    props: { productData: data },
  };
};

const ProductId = (props) => {
  console.log("props", props);
  const { productData } = props;

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6">
          <Image
            className="m-auto"
            src={productData.image}
            alt="Product image"
            width={400}
            height={400}
          />
        </div>
        <div className="col-md-6">
          <h3>{productData.title}</h3>
          <p>{productData.description}</p>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-outline-secondary">
              <strong>{productData.rating.rate}&nbsp;</strong>
              <FontAwesomeIcon className={styles.ratingStar} icon={faStar} />
            </button>
            <button type="button" className="btn btn-outline-secondary">
              {productData.rating.count}&nbsp;Ratings
            </button>
          </div>

          <h4 className="mt-3 mb-3">${productData.price}</h4>

          <button type="button" class="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
