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

// Instantiate a loader
const loader = new GLTFLoader();

const resourceURL = "/assets/cake2tired.glb";
const onResourceLoad = (gltf) => {
  console.log(gltf);
  gltf.scene.traverse(function (child) {
      if (child.isMesh) {
          // Check if the mesh has a specific material name or any other condition
          if (child.material.name == mesh.icing.top || child.material.name == mesh.icing.bottom) {
              // child.material.color.set(0xff0000);
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