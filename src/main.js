import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { scene, camera} from './scenes/cake';

// Select the container element in HTML
const container = document.getElementById('threejs-container');

// Create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfaede3);
container.appendChild(renderer.domElement);

// Handle window resize
function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
window.addEventListener('resize', onWindowResize);

// Add orbit controls to make scene draggable/controllable
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = true;

const animate = function () {
    requestAnimationFrame(animate);
    controls.update(); // Update controls in each frame
    renderer.render(scene, camera);
};

animate();