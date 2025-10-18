<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/externals/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<Footer />
