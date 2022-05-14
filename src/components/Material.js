import React from "react";
import { Edges } from "@react-three/drei";
const Material = ({}) => {
  return (
    <>
      <meshBasicMaterial color={"#CCFF90"} />
      <Edges color={"black"} scale={1} threshold={15} />
    </>
  );
};

export default Material;
