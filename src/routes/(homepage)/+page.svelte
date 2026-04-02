<script lang="ts">
	import Playground from './(components)/playground/playground.svelte';

	const { data } = $props();
</script>

<main class="gap-4 p-4 md:py-10">
	<Playground sampleContent={data.sampleContent} />
</main>
