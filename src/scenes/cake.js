import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mesh } from '../modules/constants';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(1, 3, 2.5);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Add directional lights
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight1.position.set(1, 1, 1);
scene.add(directionalLight1);

// Create a point light (candle light)
const pointLight = new THREE.PointLight(0xffaaaa, 1, 100);
pointLight.position.set(0, 2, 0);
pointLight.name = "candleLight";
pointLight.castShadow = true;
scene.add(pointLight);

// Add spotlight
const spotLight = new THREE.SpotLight( 0xff8888, 100 );
spotLight.angle = Math.PI / -4;
spotLight.penumbra = 0.3;
spotLight.position.set( 0, 10, 5 );
spotLight.castShadow = true;
spotLight.shadow.radius = 10;
scene.add( spotLight );

// Add light helpers to visualize light sources (temp)
// const directionalLightHelper1 = new THREE.DirectionalLightHelper(directionalLight1, 1); // Second parameter is size of the helper
// scene.add(directionalLightHelper1);

// const directionalLightHelper2 = new THREE.DirectionalLightHelper(directionalLight2, 1); // Second parameter is size of the helper
// scene.add(directionalLightHelper2);

// scene.add(new THREE.DirectionalLightHelper(spotLight, 1));

// Create a base for the cake
const baseCylinder = new THREE.CylinderGeometry(1.4, 1.4, 0.1, 32);
const baseMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true });
const baseMesh = new THREE.Mesh(baseCylinder, baseMaterial);
baseMesh.position.y = -0.6;
scene.add(baseMesh);

// Load the image texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/fabric.jpeg');
texture.repeat.set(1, 1);

/// Create the shape for the rectangle
const shape = new THREE.Shape();
shape.moveTo(-3, -3);
shape.lineTo(3, -3);
shape.lineTo(3, 3);
shape.lineTo(-3, 3);
shape.lineTo(-3, -3);

const extrudeSettings = { depth: 0.1, bevelEnabled: false };
const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
geometry.rotateX(Math.PI / 2);

const material = new THREE.MeshBasicMaterial({ map: texture });
const rectangle = new THREE.Mesh(geometry, material);
rectangle.position.set(0, -0.7, 0);
scene.add(rectangle);

// Instantiate a loader
const loader = new GLTFLoader();

const resourceURL = "/assets/cake.glb";
const onResourceLoad = (gltf) => {
  console.log(gltf);
  gltf.scene.traverse(function (child) {
      if (child.isMesh) {
          // Check if the mesh has a specific material name or any other condition
          if (child.material.name == mesh.icing.top || child.material.name == mesh.icing.bottom) {
              child.material.metalness = 0.3;
          }
      }
  });
  scene.add(gltf.scene);
  scene.lookAt(gltf.scene.position);
};
const handleResourceLoading = (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded');
const onResourceError = (error) => console.log(`An error occurred (${error}).`);

loader.load(resourceURL, onResourceLoad, handleResourceLoading, onResourceError);

export { scene, camera };