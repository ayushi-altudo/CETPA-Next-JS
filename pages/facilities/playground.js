import React from "react";

export const getStaticProps = () => {
  return {
    props: { footerstatus: true },
  };
};

const Playground = (props) => {
  return <div>This is Playground Page</div>;
};

export default Playground;
