precision mediump float;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;
uniform vec3 uMouse;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float color_val(vec3 color) {
  return (color.x + color.y + color.z) / 3.;
}

vec3 overlay(vec3 color1, vec3 color2) {
  if (color_val(color1) < 0.5) {
    vec3 result = 2. * color1 * color2;
    return result;
  } else {
    vec3 result = 1. - 2. * (1. - color1) * (1. - color2);
    return result;
  }
}

void main() {
  float noiseFreq = 20.;
  float noiseAmp = 0.4;
  float noiseSpeed = 0.05;
  float offset = 0.1;
  float smoothstepMin = -0.1;
  float smoothstepMax = 0.7;
  float distRadius = 0.1;

  vec3 noisePos = vec3(vPosition * noiseFreq + uTime) * noiseSpeed;

  float n = smoothstep(smoothstepMin, smoothstepMax, snoise3(noisePos)) * noiseAmp;
  float m = smoothstep(smoothstepMin, smoothstepMax, snoise3(noisePos + offset)) * noiseAmp;
  float l = smoothstep(smoothstepMin, smoothstepMax, snoise3(noisePos + offset * 2.0)) * noiseAmp;

  vec2 direction = normalize(vPosition.xy - uMouse.xy);
  float dist = length(vPosition - uMouse);
  

  // overlay func
  // vec3 mix1 = overlay(uColor1, uColor2);
  // vec3 mix2 = overlay(mix1, uColor3);
  // gl_FragColor = vec4(mix1, 1.);

  vec3 mixColor = uColor1 * n + uColor2 * m + uColor3 * l;
  if (mixColor.x > 0.9) mixColor.x = 1. - (1. - uColor1.x) / 2.;
  if (mixColor.y > 0.9) mixColor.y = 1. - (1. - uColor1.y) / 2.;
  if (mixColor.z > 0.9) mixColor.z = 1. - (1. - uColor1.z) / 2.;
  gl_FragColor = vec4(mixColor, 1.0);

  // basic one
  // gl_FragColor = vec4(n, m, l, 1.0);

  // float prox = 1.0 - map( dist, 0.0, distRadius, 0.0, 1.0 );
  // vec2 zoom = vUv + direction * prox;

  // gl_FragColor = vec4(n * (1.1 - dist * distRadius), m * (1.1 - dist * distRadius), l * (1.1 - dist * distRadius), 1.0);

  // draws circle at mouse
  // if (dist < distRadius) gl_FragColor = vec4(1., 1., 1., 1.0);

  // gl_FragColor = vec4(dist, dist, dist, 1.0);
  
}