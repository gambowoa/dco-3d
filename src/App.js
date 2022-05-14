import Box from "./components/Box.js";
import Canvas from "./components/Canvas.js";
import DCO from "./components/DCO.js";
import Material from "./components/Material.js";

function App() {
  return (
    <div style={{ background: "black", height: "100vh" }}>
      <Canvas>
        <DCO>
          <Material />
        </DCO>
      </Canvas>
    </div>
  );
}

export default App;
