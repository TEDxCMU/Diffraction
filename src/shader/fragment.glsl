precision mediump float;

uniform vec3 uColor;
uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;
varying float dist;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

void main() {
  float noiseFreq = 0.8;
  float noiseAmp = 1.0;
  float noiseSpeed = 0.2;

  vec3 noisePos = vec3(vPosition * noiseFreq + uTime) * noiseSpeed;

  float n = smoothstep(-0.2, 0.7, snoise3(noisePos)) * noiseAmp;
  float m = smoothstep(-0.2, 0.7, snoise3(noisePos + 0.1)) * noiseAmp;
  float l = smoothstep(-0.2, 0.7, snoise3(noisePos + 0.2)) * noiseAmp;

  gl_FragColor = vec4(n * (1.2 - dist), m * (1.2 - dist), l * (1.2 - dist), 1.0);

  // gl_FragColor = vec4(sin(uTime) * vUv.x, cos(uTime) * vUv.y + 0.2, 1.0, 1.0);
  
}