precision mediump float;

uniform vec3 uColor;
uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;
uniform vec3 uMouse;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
  float noiseFreq = 20.;
  float noiseAmp = 0.6;
  float noiseSpeed = 0.08;
  float offset = 0.06;
  float smoothstepMin = -0.3;
  float smoothstepMax = 0.5;
  float distRadius = 0.1;

  vec3 noisePos = vec3(vPosition * noiseFreq + uTime) * noiseSpeed;

  float n = smoothstep(smoothstepMin, smoothstepMax, snoise3(noisePos)) * noiseAmp;
  float m = smoothstep(smoothstepMin, smoothstepMax, snoise3(noisePos + offset)) * noiseAmp;
  float l = smoothstep(smoothstepMin, smoothstepMax, snoise3(noisePos + offset * 2.0)) * noiseAmp;

  vec2 direction = normalize(vPosition.xy - uMouse.xy);
  float dist = length(vPosition - uMouse);
  
  // float prox = 1.0 - map( dist, 0.0, distRadius, 0.0, 1.0 );
  // vec2 zoom = vUv + direction * prox;

  // gl_FragColor = vec4(n * (1.1 - dist * distRadius), m * (1.1 - dist * distRadius), l * (1.1 - dist * distRadius), 1.0);
  gl_FragColor = vec4(n, m, l, 1.0);

  if (dist < distRadius) gl_FragColor = vec4(1., 1., 1., 1.0);

  // gl_FragColor = vec4(dist, dist, dist, 1.0);
  
}