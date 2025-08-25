<script>
	const props = $props();
	const { image } = props;
</script>

{#if image?.url}
	<img src={image.url} alt={image.alternativeText || ''} style="max-width: 100%; height: auto;" />
{:else}
	<div style="padding: 1rem; background: #f0f0f0; border: 1px solid #ccc;">
		<p>Image component props: {JSON.stringify(props)}</p>
	</div>
{/if}
