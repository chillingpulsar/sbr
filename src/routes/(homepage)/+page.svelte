<script lang="ts">
	import { page } from '$app/state';
	import Playground from './(components)/playground/playground.svelte';
	import CopyPaste from './(components)/(copy-paste)/copy-paste.svelte';
	import LetsConnect from './(components)/lets-connect/lets-connect.svelte';
	import SeoHeader from '$lib/components/externals/seo/seo-header.svelte';

	const { data } = $props();

	const primaryTags = $derived({
		title: 'SSBR (Strapi Svelte Blocks Renderer)',
		description:
			'npm package sbr-mike: Svelte 5 + TypeScript renderer for Strapi rich-text blocks—paragraphs, headings, lists, quotes, code, images, and links. Tailwind v4–friendly defaults; override blocks and inline modifiers.',
		url: page.url.href,
		siteName: 'SSBR',
		image: {
			url: `${page.url.origin}/thumbnail.png`,
			width: 1200,
			height: 630,
			alt: 'SSBR (Strapi Svelte Blocks Renderer)',
			type: 'image/svg+xml'
		}
	});
</script>

<SeoHeader {primaryTags} />

<main class="mx-auto flex max-w-3xl flex-col gap-4 p-4 md:py-20">
	<section class="mb-4 flex flex-col gap-2">
		<h1 class="text-2xl font-bold">SSBR (Strapi Svelte Blocks Renderer)</h1>
		<p class="text-sm text-muted-foreground">
			npm package <span class="font-mono">sbr-mike</span>: Svelte 5 + TypeScript renderer for Strapi
			rich-text blocks—paragraphs, headings, lists, quotes, code, images, and links. Tailwind
			v4–friendly defaults; override blocks and inline modifiers.
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
