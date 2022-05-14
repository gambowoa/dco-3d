import React, { useEffect } from "react";

import PropTypes from "prop-types";
const Box = ({ depth, height, width, ...restProps }) => {
  return (
    <mesh scale={1} {...restProps}>
      <boxBufferGeometry args={[width, height, depth]} />
    </mesh>
  );
};

Box.defaultProps = { depth: 1, height: 1, width: 1 };
Box.propTypes = {
  depth: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
};
export default Box;
