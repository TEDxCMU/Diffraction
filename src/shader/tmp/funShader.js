import * as THREE from "three";
import { forwardRef, useMemo } from 'react'
import { Effect } from "postprocessing";
import { useTexture } from "@react-three/drei"

class FunEffectImpl extends Effect {
  constructor(texture) {
    super("WaterEffect", fragment, {
      uniforms: new Map([["uTexture", new THREE.Uniform(texture)]])
    });
  }
}

export const FunEffect = forwardRef(({ texture }, ref) => {
  let deathTexture = useTexture("/test-texture.jpg")
  texture = deathTexture
  const effect = useMemo(() => new FunEffectImpl(texture), [texture])
  return <primitive ref={ref} object={effect} />
})

const fragment = `
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