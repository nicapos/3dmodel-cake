import { defaultColor, mesh } from "./constants";
import { scene } from "../scenes/cake";

// Setup default color values in form after DOM loads
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("icing-color").value = defaultColor.icing;
  document.getElementById("frosting-color").value = defaultColor.frosting;
  document.getElementById("candle-color").value = defaultColor.candle;
  document.getElementById("base-color").value = defaultColor.base;
});

document.getElementById("icing-color").addEventListener('input', function(event) {
  const selectedColor = event.target.value;
  scene.traverse(function(child) {
      if (child.isMesh && (child.material.name === mesh.icing.top || child.material.name === mesh.icing.bottom)) {
          child.material.color.set(selectedColor);
      }
  });
});

document.getElementById("frosting-color").addEventListener('input', function(event) {
  const selectedColor = event.target.value;
  scene.traverse(function(child) {
      if (child.isMesh && (child.material.name === mesh.frosting)) {
          child.material.color.set(selectedColor);
      }
  });
});

document.getElementById("candle-color").addEventListener('input', function(event) {
  const selectedColor = event.target.value;
  scene.traverse(function(child) {
      if (child.isMesh && (child.material.name === mesh.candle)) {
          child.material.color.set(selectedColor);
      }
  });
});

document.getElementById("base-color").addEventListener('input', function(event) {
  const selectedColor = event.target.value;
  scene.traverse(function(child) {
      if (child.isMesh && (child.material.name === mesh.base.top || child.material.name === mesh.base.bottom)) {
          child.material.color.set(selectedColor);
      }
  });
});