<script lang="ts">
import Hwb from "../domains/ColorPicker/components/Hwb.svelte";

	type HWB = [number, number, number];
	type RGB = [number, number, number];
	let H = 35;
	let W = 0.5;
	let B = 0;
	let size = 53;

	const hueToRGB = (hue: number): RGB => {
		hue = hue % 360;
		const x = 1 - Math.abs(((hue / 60) % 2) - 1);
		if (hue < 60) {
			return [1, x, 0];
		} else if (hue < 120) {
			return [x, 1, 0];
		} else if (hue < 180) {
			return [0, 1, x];
		} else if (hue < 240) {
			return [0, x, 1];
		} else if (hue < 300) {
			return [x, 0, 1];
		} else if (hue < 360) {
			return [1, 0, x];
		} else {
			throw new Error('Invalid hue');
		}
	};
	const hwbToRGB = (hwb: HWB): RGB => {
		const h = hwb[0],
			w = hwb[1],
			b = hwb[2];
		if (w + b >= 1) {
			const a = w / (w + b);
			return [a, a, a];
		} else {
			const base = hueToRGB(h);
			const baseR = base[0],
				baseG = base[1],
				baseB = base[2];
			const hPrime = 1 - w - b;
			return [baseR * hPrime + w, baseG * hPrime + w, baseB * hPrime + w];
		}
	};
	const rgbToHex = (rgb: RGB): string => {
		return (
			'#' +
			rgb
				.map((x) =>
					Math.round(x * 255)
						.toString(16)
						.padStart(2, '0')
				)
				.join('')
		);
	};
</script>

<main>
	<section id="sliders">
		<label for="hue">
      Hue
		</label>
    <input id="hue" type="range" min={0} max={360} bind:value={H} />
		<label for="whiteness">
      Whiteness
		</label>
    <input id="whiteness" type="range" min={0} max={1} step={0.01} bind:value={W} />
		<label for="blackness">
      Blackness
		</label>
    <input id="blackness" type="range" min={0} max={1} step={0.01} bind:value={B} />
	</section>
	<section>
		<pre style="width: 250px;">
      background: hwb({H}deg {(W * 100) | 0}% {(B * 100) | 0}%);
    </pre>
		<div
			class="color-box"
			style="background: {rgbToHex(hwbToRGB([H, W, B]))};"
		>
		</div>
		<div
			class="color-box"
			style="background: hwb({H}deg {(W * 100) | 0}% {(B * 100) | 0}%);"
		>
		</div>
	</section>
	<section>
		<label for="colorpicker-size">
      Size
		</label>
    <input id="colorpicker-size" type="range" min={53} max={200} bind:value={size} />
		<Hwb H={H} W={W} B={B} size={size}/>
	</section>
</main>

<style>
  main {
    display: flex;
  }
  #sliders {
    display: flex;
    flex-flow: column nowrap;
  }
	.color-box {
		width: 1rem;
		height: 1rem;
		border-radius: 4px;
	}
</style>
