<script lang="ts">
import { tick } from "svelte";
import { hueToRGB } from "../utils/hueToRGB";


export let H: number;
export let W: number;
export let B: number;
export let size: number;
let hueBarSize = 16;
$: triangleSize = size - hueBarSize * 2;

let triangleCanvas: HTMLCanvasElement;

type Vec = [number, number];

const sub = (v0: Vec, v1: Vec): Vec => [v0[0] - v1[0], v0[1] - v1[1]];
const cross = (v0: Vec, v1: Vec) => (v0[0] * v1[1]) - (v0[1] * v1[0]);

$: { // draw triangle
  const vertices = [ // V_h, V_w, V_b
    [Math.cos(H * Math.PI / 180), Math.sin(H * Math.PI / 180)],
    [Math.cos(H * Math.PI / 180 + 2 * Math.PI / 3), Math.sin(H * Math.PI / 180 + 2 * Math.PI / 3)],
    [Math.cos(H * Math.PI / 180 + 4 * Math.PI / 3), Math.sin(H * Math.PI / 180 + 4 * Math.PI / 3)],
  ].map(vertex => vertex.map(x => (x + 1) * triangleSize * 0.5)) as Vec[];
  drawTriangle(vertices);
  console.log(vertices);
}

const drawTriangle = (vertices: Vec[]) => {
  // bounding box
  const xMin = Math.min(...vertices.map(vertex => vertex[0])) | 0;
  const xMax = Math.max(...vertices.map(vertex => vertex[0])) | 0;
  const yMin = Math.min(...vertices.map(vertex => vertex[1])) | 0;
  const yMax = Math.max(...vertices.map(vertex => vertex[1])) | 0;

  const ctx = triangleCanvas?.getContext('2d');
  if (ctx == null) return;
  ctx.clearRect(0, 0, size, size);
  const imageData = ctx.getImageData(hueBarSize, hueBarSize, triangleSize, triangleSize);

  // draw triangle
  for (let y = yMin; y < yMax; y++) {
    for (let x = xMin; x < xMax; x++) {
      const pixel: Vec = [x, y];
      const vH = vertices[0];
      const vW = vertices[1];
      const vB = vertices[2];
      const normalize = 1 / cross(sub(vH, vW), sub(vB, vH));
      const w = cross(sub(pixel, vH), sub(vH, vB)) * normalize;
      const b = cross(sub(pixel, vW), sub(vW, vH)) * normalize;
      const h = 1 - w - b;
      if (h < 0 || w < 0 || b < 0) continue;
      const rgb = hueToRGB(H);
      const R = rgb[0] * h + w;
      const G = rgb[1] * h + w;
      const B = rgb[2] * h + w;
      const A = 1;
      const index = (y * triangleSize + x) * 4;
      imageData.data[index + 0] = R * 255;
      imageData.data[index + 1] = G * 255;
      imageData.data[index + 2] = B * 255;
      imageData.data[index + 3] = A * 255;
    }
  }
  ctx.putImageData(imageData, hueBarSize, hueBarSize);
}
</script>

<canvas bind:this={triangleCanvas} width={size} height={size}></canvas>