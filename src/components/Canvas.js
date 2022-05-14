import React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import useWindowDimensions from "../hooks/useWindowDimensions";
const Canvas = ({
  children,
  position = [0, 0, 20],
  autoRotate = true,
  zoom = 30,
}) => {
  const { width, dpr } = useWindowDimensions();
  console.log(width);
  return (
    <ThreeCanvas flat dpr={dpr}>
      <OrthographicCamera
        makeDefault
        position={position}
        zoom={(width * zoom) / 100}
        far={1000}
        near={-1000}
      />
      {children}

      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={5}
        enableRotate={true}
        enablePan={false}
        enableZoom={false}
      />
      <color attach="background" args={["#ECEFF1"]} />
    </ThreeCanvas>
  );
};

export default Canvas;
