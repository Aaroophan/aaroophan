import React, { useRef, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import ThreeDee from './Images/FinalBaseMesh.obj';

const Man3d: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const container = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
        camera.position.set(15, 5, 20);
        camera.lookAt(scene.position);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        renderer.setSize(container.clientWidth, container.clientWidth);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.screenSpacePanning = false;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 1, 0);
        scene.add(directionalLight);

        const loader = new OBJLoader();
        loader.load(
            ThreeDee,
            (obj) => {
                obj.name = "ThreeDeeObj";
                obj.position.set(0, -10, 0);
                scene.add(obj);
            },
            undefined,
            (error) => {
                console.error('An error occurred:', error);
            }
        );

        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const object = scene.getObjectByName('ThreeDeeObj');
            if (object) {
                object.rotation.y += 0.01;
            }

            const time = Date.now() * 0.001;
            ambientLight.position.set(
                50 * Math.sin(time),
                50 * Math.cos(time),
                50 * Math.cos(time)
            );
            ambientLight.lookAt(0, 0, 0);

            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            controls.dispose();
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div className="bg-transparent rounded-4">
            <div className="zoom" ref={mountRef} />
        </div>
    );
};

export default Man3d;