import { defaultColor } from "./constants";

// Setup default color values in form after DOM loads
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("icing-color").value = defaultColor.icing;
  document.getElementById("frosting-color").value = defaultColor.frosting;
  document.getElementById("candle-color").value = defaultColor.candle;
  document.getElementById("base-color").value = defaultColor.base;
});