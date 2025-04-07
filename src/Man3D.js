import React, { useRef, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

import ThreeDee from './Images/FinalBaseMesh.obj';

export default function Man3d() {
    let mountRef = useRef(null);

    useEffect(() => {
        let container = mountRef.current;
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
        camera.position.set(15, 5, 20);
        camera.lookAt(scene.position);

        let renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

        renderer.setSize(container.clientWidth, container.clientWidth);
        renderer.setClearColor(0x000000, 0);
        
        mountRef.current.appendChild(renderer.domElement);

        // let geometry = new THREE.BoxGeometry(1, 10, 3.5);
        // let material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        // let cube = new THREE.Mesh(geometry, material);
        // cube.name = "ABCD";

        //scene.add(cube);
        
        let controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.screenSpacePanning = false;
        //controls.maxPolarAngle = 2;

        let ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
        scene.add(ambientLight);
        let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 1, 0);
        scene.add(directionalLight);
        controls.update();



        // let loader = new GLTFLoader();
        // loader.load(ThreeDee, (gltf) => {
        //     const bicycle = gltf.scene;
        //     bicycle.name = "Bicycle";
        //     bicycle.position.set(0, 0, 0);
        //     scene.add(bicycle);
        // }, undefined, (error) => {
        //     console.error('An error happened', error);
        // });

        let loader = new OBJLoader();
        loader.load(ThreeDee, (obj) => {
            obj.name = "ThreeDeeObj";
            obj.position.set(0, -10, 0);
            scene.add(obj);
        }, undefined, (error) => {
            console.error('An error happened', error);
        });

        let animate = function () {
            requestAnimationFrame(animate);

            let object = scene.getObjectByName('ThreeDeeObj');
            if (object) {
                object.rotation.y += 0.01;
            }

            // Rotate the ambientLight light around the scene
            ambientLight.position.x = 50 * Math.sin(Date.now() * 0.001);
            ambientLight.position.z = 50 * Math.cos(Date.now() * 0.001);
            ambientLight.position.y = 50 * Math.cos(Date.now() * 0.001);
            ambientLight.lookAt(0, 0, 0); // Keep the light pointing at the center

            controls.update();

            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', function () {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
        }, false);

        return () => {
            controls.dispose();
            renderer.dispose();
        };
    }, []);

    return(
        <div className="bg-transparent rounded-4">
        <div className="zoom" ref={mountRef}></div>
        </div>
    );
};