  precision mediump float;

  uniform vec3 uColor;
  uniform float uTime;

  varying vec2 vUv;
  varying vec3 vPosition;

  #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

  void main() {
    float n = snoise3(vPosition + uTime/6.0) + 0.2;
    float m = snoise3(vPosition + uTime/6.0 + 0.1) + 0.2;
    float l = snoise3(vPosition + uTime/6.0 + 0.2) + 0.2;

    gl_FragColor = vec4(n, m, l, 1.0);

    // gl_FragColor = vec4(sin(uTime) * vUv.x, cos(uTime) * vUv.y + 0.2, 1.0, 1.0);
    
  }