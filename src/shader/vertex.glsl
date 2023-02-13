precision mediump float;

varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

void main() {
  vec3 pos = position;
  float noiseFreq = 2.5;
  float noiseAmp = 0.5;

  vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
  //pos.z += snoise3(noisePos) * noiseAmp;

  vUv = uv;
  vPosition = pos;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
}