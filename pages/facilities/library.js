import React from "react";

export const getStaticProps = () => {
  return {
    props: { footerstatus: true },
  };
};

const Library = (props) => {
  return <div>This is Library Page</div>;
};

export default Library;
