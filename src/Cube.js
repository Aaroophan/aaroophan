import React, { useRef, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

import ThreeDee from './Images/Chocolate Cake.obj';

import Photo1 from "./Images/Profile_1.JPG";
import Photo2 from "./Images/Profile_2.JPG";
import Photo3 from "./Images/Profile_3.JPG";
import Photo4 from "./Images/Profile_4.JPG";
import Photo5 from "./Images/Profile_5.JPG";
import Photo6 from "./Images/Profile_6.JPG";

export default function Cube() {
    let mountRef = useRef(null);

    useEffect(() => {
        let container = mountRef.current;
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.set(11, 0, 11);
        camera.lookAt(scene.position);

        let renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});

        renderer.setSize(container.clientWidth, container.clientWidth);
        renderer.setClearColor(0x000000, 0);

        renderer.shadowMap.enabled = true;  // Enable shadow maps
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // For softer shadows
        
        mountRef.current.appendChild(renderer.domElement);

        // Load the image texture
        let textureLoader = new THREE.TextureLoader();
        let photoTexture1 = textureLoader.load(Photo1);
        let photoTexture2 = textureLoader.load(Photo2);
        let photoTexture3 = textureLoader.load(Photo3);
        let photoTexture4 = textureLoader.load(Photo4);
        let photoTexture5 = textureLoader.load(Photo5);
        let photoTexture6 = textureLoader.load(Photo6);

        // Create materials for each face of the cube using the photo texture
        let materials = [
            new THREE.MeshBasicMaterial({ map: photoTexture1, transparent: false }),  // Right side
            new THREE.MeshBasicMaterial({ map: photoTexture2, transparent: false }),  // Left side
            new THREE.MeshBasicMaterial({ map: photoTexture3, transparent: false }),  // Top side
            new THREE.MeshBasicMaterial({ map: photoTexture4, transparent: false }),  // Bottom side
            new THREE.MeshBasicMaterial({ map: photoTexture5, transparent: false }),  // Front side
            new THREE.MeshBasicMaterial({ map: photoTexture6, transparent: false })   // Back side
        ];


        let geometry = new THREE.BoxGeometry(10, 10, 10);
        //let material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        let cube = new THREE.Mesh(geometry, materials);
        cube.castShadow = true;  // Enable shadows for the cube
        cube.name = "ABCD";

        scene.add(cube);

        let planeGeometry = new THREE.PlaneGeometry(1000, 1000);
        let planeMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
        let plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -100;
        plane.receiveShadow = true;  // Enable shadows for the plane
        scene.add(plane);

        // Add a directional light to cast shadows
        let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(200, 400, 200);  // Adjusted position for larger shadows
        directionalLight.castShadow = true;  // Enable shadows for the light
        directionalLight.shadow.mapSize.width = 2048;  // Increased shadow resolution for better quality
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 1000;

        // Adjust shadow camera to extend shadow range and size
        directionalLight.shadow.camera.left = -500;
        directionalLight.shadow.camera.right = 500;
        directionalLight.shadow.camera.top = 500;
        directionalLight.shadow.camera.bottom = -500;

        // Bias to reduce shadow artifacts
        directionalLight.shadow.bias = -0.01;

        scene.add(directionalLight);
        
        let controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI / 2;

        // let ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
        // scene.add(ambientLight);
        // let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        // directionalLight.position.set(5, 1, 0);
        // scene.add(directionalLight);
        // controls.update();

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
            obj.position.set(0, 0, 0);
            //scene.add(obj);
        }, undefined, (error) => {
            console.error('An error happened', error);
        });

        let animate = function () {
            requestAnimationFrame(animate);

            let object = scene.getObjectByName('ABCD');
            if (object) {
                object.rotation.x += 0.01;
                object.rotation.y += 0.02;
                object.rotation.z += 0.03;
            }

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
            //material.dispose();
            geometry.dispose();
        };
    }, []);

    return(
        <div className="zoom" ref={mountRef}></div>
    );
};