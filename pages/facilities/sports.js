import React from "react";

export const getStaticProps = () => {
  return {
    props: { footerstatus: true },
  };
};

const Sports = (props) => {
  return <div>This is Sports Page</div>;
};

export default Sports;
