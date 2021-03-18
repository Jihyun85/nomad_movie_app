import React from "react";

function Detail(props) {
  const {
    location: { state },
  } = props;
  console.log(state);
  return <span>{state.title}</span>;
}

export default Detail;
