import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { scene, camera} from './scenes/cake';

// Create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfaede3);
document.body.appendChild(renderer.domElement);

// Add orbit controls to make scene draggable/controllable
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = true;

const animate = function () {
    requestAnimationFrame(animate);
    controls.update(); // Update controls in each frame
    renderer.render(scene, camera);
};

animate();