// import React, { useRef, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { Environment, Sphere } from '@react-three/drei';

// // Simple avatar component that generates a shape based on the user's name
// const Avatar = ({ name }) => {
//   const meshRef = useRef<THREE.Mesh>(null);

//   // Fallback name in case the prop is not passed
//   const safeName = name || "Default Name"; // Fallback to "Default Name"
  
//   // Generate a consistent shape based on the name
//   const colorSeed = safeName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
//   const sizeSeed = (colorSeed % 100) / 100; // Normalized between 0 and 1
  
//   // Generate a vibrant color based on the name
//   const r = Math.sin(colorSeed * 0.1) * 0.5 + 0.5;
//   const g = Math.sin(colorSeed * 0.2) * 0.5 + 0.5;
//   const b = Math.sin(colorSeed * 0.3) * 0.5 + 0.5;
  
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
//     }
//   });

//   return (
//     <group>
//       {/* Core shape */}
//       <mesh ref={meshRef}>
//         <icosahedronGeometry args={[1.5, 1]} />
//         <meshStandardMaterial 
//           color={new THREE.Color(r, g, b)} 
//           metalness={0.3} 
//           roughness={0.2} 
//           wireframe
//         />
//       </mesh>
      
//       {/* Generate floating particles based on name */}
//       {Array.from({ length: 24 }, (_, i) => {
//         const angle = (i / 12) * Math.PI * 2;
//         const radius = 2.2 + Math.sin(i * sizeSeed) * 0.3;
//         const x = Math.cos(angle) * radius;
//         const y = Math.sin(i * 0.5) * 1.5;
//         const z = Math.sin(angle) * radius;
        
//         return (
//           <Sphere 
//             key={i} 
//             position={[x, y, z]} 
//             args={[0.06 + Math.random() * 0.1, 8, 8]}
//           >
//             <meshStandardMaterial 
//               color={new THREE.Color(r, g, b).offsetHSL(i * 0.02, 0, 0)} 
//               emissive={new THREE.Color(r, g, b).offsetHSL(i * 0.02, 0, 0)}
//               emissiveIntensity={0.5}
//             />
//           </Sphere>
//         );
//       })}
//     </group>
//   );
// };

// const ThreeAvatar = ({ name }) => {
//   // Check if name is passed; if not, use default value
//   const safeName = name || "Aaroophan"; // Default name value in case `name` prop is missing

//   return (
//     <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={0.5} />
//       <pointLight position={[-10, -10, -10]} intensity={0.1} />
//       <Avatar name={safeName} />
      
//       {/* Directly using OrbitControls */}
//       <OrbitControls 
//         enableZoom={false} 
//         enablePan={false}
//         autoRotate 
//         autoRotateSpeed={0.5} 
//         minPolarAngle={Math.PI / 2 - 0.5} 
//         maxPolarAngle={Math.PI / 2 + 0.5}
//       />
      
//       {/* Environment preset */}
//       <Environment preset="city" />
//     </Canvas>
//   );
// };

// export default ThreeAvatar;
