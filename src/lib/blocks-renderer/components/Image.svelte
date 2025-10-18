<script lang="ts">
	import type { ImageBlockNode } from '../types.js';

	interface Props {
		image: ImageBlockNode['image'];
	}

	let { image }: Props = $props();
</script>

{#if image?.url}
	<img src={image.url} alt={image.alternativeText || ''} style="max-width: 100%; height: auto;" />
{:else}
	<div style="padding: 1rem; background: #f0f0f0; border: 1px solid #ccc;">
		<p>Image component props: {JSON.stringify(image)}</p>
	</div>
{/if}
