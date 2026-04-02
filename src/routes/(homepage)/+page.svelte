<script lang="ts">
	import Playground from './(components)/playground/playground.svelte';
	import CopyPaste from './(components)/(copy-paste)/copy-paste.svelte';
	import LetsConnect from './(components)/lets-connect/lets-connect.svelte';

	const { data } = $props();
</script>

<main class="mx-auto flex max-w-3xl flex-col gap-4 p-4 md:py-20">
	<section class="mb-4 flex flex-col gap-2">
		<h1 class="text-2xl font-bold">SSBR (Strapi Svelte Blocks Renderer)</h1>
		<p class="text-sm text-muted-foreground">
			Svelte 5 renderer for Strapi rich-text blocks. Tailwind v4–friendly; override blocks and
			modifiers as needed.
		</p>

		<div class="mb-4 flex flex-wrap items-center gap-4">
			<CopyPaste value="npm install sbr-mike" />
			<CopyPaste value="bun add sbr-mike" />
			<CopyPaste value="yarn add sbr-mike" />
			<CopyPaste value="pnpm add sbr-mike" />
		</div>

		<p class="text-sm text-muted-foreground">
			Try it out by writing some content in the playground below.
		</p>
	</section>

	{#key data.sampleContent}
		<Playground sampleContent={data.sampleContent} />
	{/key}

	<LetsConnect />
</main>
