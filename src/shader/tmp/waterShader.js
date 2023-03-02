import * as THREE from "three";
import { useRef, useEffect, forwardRef, useMemo } from 'react'
import { Effect } from "postprocessing";
import { useTexture } from "@react-three/drei"

// using classes bc the docs and tutorial use them
// and it is kinda hard converting to functional 

// export class WaterTexture{
//   constructor(options) {
//     this.size = 64;
//     this.radius = this.size * 0.1;
//     this.width = this.height = this.size;

//     this.points = [];
//     this.maxAge = 64;
//     if (options.debug) {
//       this.width = window.innerWidth;
//       this.height = window.innerHeight;
//       this.radius = this.width * 0.05;
//     }
      
//     this.initTexture();
//     if(options.debug) document.body.append(this.canvas);
//   }

//     // Initialize our canvas
//   initTexture() {
//     this.canvas = document.createElement("canvas");
//     this.canvas.id = "WaterTexture";
//     this.canvas.width = this.width;
//     this.canvas.height = this.height;
//     this.ctx = this.canvas.getContext("2d");
//     this.clear();
	
//   }

//   clear() {
//     this.ctx.fillStyle = "black";
//     this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
//   }

//   addPoint(point) {
//     this.points.push({ x: point.x, y: point.y, age: 0 });
//   }

//   drawPoint(point) {
//     // Convert normalized position into canvas coordinates
//     let pos = {
//         x: point.x * this.width,
//         y: point.y * this.height
//     }
//     const radius = this.radius;
    
//     const ctx = this.ctx;
//     // Lower the opacity as it gets older
//     let intensity = 1.;
//     intensity = 1. - point.age / this.maxAge;
    
//     let color = "255,255,255";
    
//     let offset = this.width * 5.;
//     // 1. Give the shadow a high offset.
//     ctx.shadowOffsetX = offset; 
//     ctx.shadowOffsetY = offset; 
//     ctx.shadowBlur = radius * 1; 
//     ctx.shadowColor = `rgba(${color},${0.2 * intensity})`; 
    
//     this.ctx.beginPath();
//     this.ctx.fillStyle = "rgba(255,0,0,1)";
//     this.ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
//     this.ctx.fill();
//   }

//   update(){
//     this.clear();

//     this.points.forEach(point => {
//         point.age += 1;
//         if(point.age > this.maxAge){
//             this.points.splice(i, 1);
//         }
//     });

//     this.points.forEach(point => {
//         this.drawPoint(point);
//     });
//   }
// }

export const WaterTexture = (props) => {
  const ref = useRef()
  
  useEffect(() => {
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 150, 100);
    ctx.fillStyle = "green";
    ctx.fillRect(100, 100, 150, 100);
    ctx.fillStyle = "blue";
    ctx.fillRect(200, 200, 150, 100);
    console.log("canvas width");
    console.log(canvas.width);
  }, []);

  return (
    <canvas ref={ref} 
            {...props}/>
  )
}

export class WaterEffectImpl extends Effect {
  constructor(texture, mouse) {
    super("WaterEffect", fragment, {
      uniforms: new Map([["uTexture", new THREE.Uniform(texture)]])
    });
  }
}

const fragment = `
//uniform vec2 uMouse;

void mainUv(inout vec2 uv) {

  vec2 centeruv = vec2(0.5,0.5);
  float dist = length(uv - centeruv);
  if (dist < 0.1) {
    vec2 direction = normalize(uv - centeruv);
    float mag = dist;
    uv.x += direction.x * mag * 1.5;
    uv.y += direction.y * mag * 1.5;
  }

}
`

const fragment3 = `
    // void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    //   outputColor = vec4(uv.x,uv.y,0.,1.);
    // }

    // vec2 centeruv = vec2(0.5,0.5);
    // float dist = length(uv - centeruv);
    // if (dist < 0.1) {
    //   vec2 direction = normalize(uv - centeruv);
    //   float mag = dist;
    //   uv.x += direction.x * mag;
    //   uv.y += direction.y * mag;
    // }

    uniform sampler2D uTexture;

    void mainUv(inout vec2 uv) {
        vec4 tex = texture2D(uTexture, uv);
        
        // Convert normalized values into regular unit vector
        float vx = -(tex.r *2. - 1.);
        float vy = -(tex.g *2. - 1.);
    
        // Normalized intensity works just fine for intensity
        float intensity = tex.b;
        float maxAmplitude = 0.2;
        uv.x += vx * intensity * maxAmplitude;
        uv.y += vy * intensity * maxAmplitude;
    }
`

const fragment2 = `
uniform sampler2D uTexture;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec4 tex = texture2D(uTexture, uv);
  outputColor = tex;
}
`

const fragment1 = `
uniform sampler2D uTexture;

void mainUv(inout vec2 uv) {
    vec4 tex = texture2D(uTexture, uv);
    
    // Convert normalized values into regular unit vector
    float vx = -(tex.r *2. - 1.);
    float vy = -(tex.g *2. - 1.);

    // Normalized intensity works just fine for intensity
    float intensity = tex.b;
    float maxAmplitude = 0.2;
    uv.x += vx * intensity * maxAmplitude;
    uv.y += vy * intensity * maxAmplitude;
}
`;