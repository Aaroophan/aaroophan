import React, { useRef, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import type { Material, Mesh, PerspectiveCamera, WebGLRenderer, Scene } from 'three';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images with TypeScript-friendly syntax
import ThreeDee from '../assets/Images/Chocolate Cake.obj';
import Photo1 from "../assets/Images/Profile_1.JPG";
import Photo2 from "../assets/Images/Profile_2.JPG";
import Photo3 from "../assets/Images/Profile_3.JPG";
import Photo4 from "../assets/Images/Profile_4.JPG";
import Photo5 from "../assets/Images/Profile_5.JPG";
import Photo6 from "../assets/Images/Profile_6.JPG";

const Cube: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const container = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.set(11, 0, 11);
        camera.lookAt(scene.position);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false
        }) as WebGLRenderer;

        renderer.setSize(container.clientWidth, container.clientWidth);
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        container.appendChild(renderer.domElement);

        // Texture loading
        const textureLoader = new THREE.TextureLoader();
        const loadTexture = (path: string) => textureLoader.load(path);

        const materials = [
            new THREE.MeshBasicMaterial({ map: loadTexture(Photo1) }),
            new THREE.MeshBasicMaterial({ map: loadTexture(Photo2) }),
            new THREE.MeshBasicMaterial({ map: loadTexture(Photo3) }),
            new THREE.MeshBasicMaterial({ map: loadTexture(Photo4) }),
            new THREE.MeshBasicMaterial({ map: loadTexture(Photo5) }),
            new THREE.MeshBasicMaterial({ map: loadTexture(Photo6) })
        ] as Material[];

        const geometry = new THREE.BoxGeometry(10, 10, 10);
        const cube = new THREE.Mesh(geometry, materials) as Mesh;
        cube.castShadow = true;
        cube.name = "ABCD";
        scene.add(cube);

        // Shadow plane
        const planeGeometry = new THREE.PlaneGeometry(1000, 1000);
        const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -100;
        plane.receiveShadow = true;
        scene.add(plane);

        // Lighting
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(200, 400, 200);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 1000;
        directionalLight.shadow.camera.left = -500;
        directionalLight.shadow.camera.right = 500;
        directionalLight.shadow.camera.top = 500;
        directionalLight.shadow.camera.bottom = -500;
        directionalLight.shadow.bias = -0.01;
        scene.add(directionalLight);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI / 2;

        // Animation
        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const cube = scene.getObjectByName('ABCD') as Mesh;
            if (cube) {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.02;
                cube.rotation.z += 0.03;
            }

            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);

            controls.dispose();
            renderer.dispose();
            geometry.dispose();
            materials.forEach(material => material.dispose());

            if (container?.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div className="zoom" ref={mountRef} />;
};

export default Cube;