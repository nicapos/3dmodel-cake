import { PointLight } from "three";
import { scene } from "../scenes/cake";
import { mesh } from "./constants";
import { stopHappyBdayAudio, playYay } from "./play-audio";

let volumeInterval;

function handleBlowCandle() {
  if (!scene) return;

  scene.traverse((child) => {
    if (child.isMesh && (child.material.name === mesh.candle.wick)) {
      child.material.opacity = 0;
      child.material.transparent = true;
      child.material.needsUpdate = true;
    } else if (child instanceof PointLight && child.name === "candleLight") {
      child.intensity = 0;
    }
  }); 

  stopHappyBdayAudio();
  playYay();

  clearInterval(volumeInterval); // Stop listening for volume change
}

navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    var audioContext = new AudioContext();
    var analyser = audioContext.createAnalyser();
    var microphone = audioContext.createMediaStreamSource(stream);
    microphone.connect(analyser);

    // Set up AnalyserNode
    analyser.fftSize = 64; // Set FFT size (frequency bin count)
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    // Get input volume in dB
    function getInputVolume() {
      analyser.getByteFrequencyData(dataArray);
      var amp = 0;
      for (var i = 0; i < bufferLength; i++) {
        amp += dataArray[i];
      }
      console.log(amp);

      if (amp > 1900) {
        console.log("Blow candle")
        handleBlowCandle();
      }
    }

    volumeInterval = setInterval(getInputVolume, 100);
  })
  .catch(function(err) {
    console.error('Error accessing microphone:', err);
  });
