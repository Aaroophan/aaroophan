import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const Text3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    if (window.innerWidth < 992) {
        renderer.setSize(window.innerWidth / 1.1, window.innerHeight / 2);
    } else {
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 3.5);
    }

    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 0.1, 1.5);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    const loader = new FontLoader();
    let text;

    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font) {
        const geometry = new TextGeometry('Aaroophan', {
            font: font,
            size: 0.25,
            height: 0.1,
        });

        geometry.center();

        const material = new THREE.MeshBasicMaterial({ color: 0xf0f0f0 });
        text = new THREE.Mesh(geometry, material);

        text.position.set(0, 0, 0); 

        scene.add(text);
    });

    
    if (window.innerWidth < 992) {
        camera.position.z = 15;
    } else {
        camera.position.z = 5;
    }
    

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    const animate = function () {
        requestAnimationFrame(animate);
        if (text) {
            text.rotation.y += 0.01;
        }
        controls.update();

        renderer.render(scene, camera);
    };

    animate();

    return () => {
        controls.dispose();
        renderer.dispose();
        material.dispose();
        geometry.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Text3D;
