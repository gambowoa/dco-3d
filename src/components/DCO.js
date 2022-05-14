import React, { useMemo } from "react";

import { Extrude, Center } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

const DCO = ({ children }) => {
  const dco = useLoader(SVGLoader, "/dco.svg").paths;
  const holes = useLoader(SVGLoader, "/dco_holes.svg").paths;

  let dcoshape, holesshapes;
  useMemo(() => {
    dcoshape = dco.flatMap((path, i) => {
      return path.toShapes(true, true);
    });

    holesshapes = holes.flatMap((path, i) => {
      return path.toShapes(true, true);
    });

    dcoshape[0].holes.push(holesshapes[0]);
    dcoshape[2].holes.push(holesshapes[1]);
  }, []);

  const extrudeSettings = { steps: 1, depth: 10, bevelEnabled: false };
  return (
    <Center>
      {" "}
      <mesh scale={[0.01, -0.01, 0.01]}>
        <Extrude scale={1} args={[dcoshape, extrudeSettings]}>
          {children}
        </Extrude>
      </mesh>
    </Center>
  );
};

export default DCO;
