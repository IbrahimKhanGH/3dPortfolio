import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const Luffy = ({ isMobile }) => {
  const luffy = useGLTF("./luffy/scene.gltf");

  return (
    <mesh>
      {/* Lighting setup */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />


      {/* 3D model */}
      <primitive
        object={luffy.scene}
        scale={isMobile ? 0.01 : 0.008}
        position={isMobile ? [0, -3, -2.2] : [-1.5, -2.4, 4.25]}
        rotation={[0, -0.5, 0]}
      />
    </mesh>
  );
};

const Jett = ({ isMobile }) => {
  const jett = useGLTF("./jett/scene.gltf");

  return (
    <mesh>
      {/* Lighting setup */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0} />

      {/* 3D model */}
      <primitive
        object={jett.scene}
        scale={isMobile ? 15 : 15}
        position={isMobile ? [0, -3, -2.2] : [-.3, -2.65, 4]}
        rotation={[0, -3.2, -1.1]}
      />
    </mesh>
  );
};

const Cypher = ({ isMobile }) => {
  const cypher = useGLTF("./cypher/scene.gltf");

  return (
    <mesh>
      {/* Lighting setup */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0} />

      {/* 3D model */}
      <primitive
        object={cypher.scene}
        scale={isMobile ? 0.01 : 15}
        position={isMobile ? [0, -3, -2.2] : [-.4, -2.65, 4.75]}
        rotation={[0, -2.8, -1.1]}
      />
    </mesh>
  );
};

const Turret = ({ isMobile }) => {
  const turret = useGLTF("./turret/scene.gltf");

  return (
    <mesh>
      {/* Lighting setup */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />

      {/* 3D model */}
      <primitive
        object={turret.scene}
        scale={isMobile ? 0.01 : .0004}
        position={isMobile ? [0, -3, -2.2] : [-0.5, -0.4, -4.3]}
        rotation={[0, 0.4, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // add listener which adjusts based on screen size
    const MediaQuery = window.matchMedia("(max-width: 500px)");

    // we set initial value of isMobile variable
    setIsMobile(MediaQuery.matches);

    // function for mediaQuery changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // callback function as a listener for changes 
    MediaQuery.addEventListener("change", handleMediaQueryChange);

    // remove the listener when umnmounted
    return () => {
      MediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Luffy isMobile={isMobile} />
        <Jett isMobile={isMobile}/>
        <Cypher isMobile={isMobile}/>
        <Turret isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
