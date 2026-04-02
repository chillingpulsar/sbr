<script lang="ts">
	/** JSON-LD graph nodes; keep in sync with on-page content (Google structured-data guidelines). */
	type JsonLd = Record<string, unknown>;

	interface ImageMeta {
		url: string;
		width: number;
		height: number;
		alt: string;
		type?: string;
	}

	interface Props {
		ldJsons?: JsonLd[];
		primaryTags: {
			title: string;
			description: string;
			url: string;
			image: ImageMeta;
			/** Not used by Google for ranking; omit if you prefer not to emit the tag. */
			keywords?: string;
			author?: string;
			/** Used for og:site_name / branding when `facebookTags` is omitted. */
			siteName?: string;
		};
		facebookTags?: {
			title: string;
			type: string;
			url: string;
			description: string;
			locale?: string;
			siteName: string;
		};
		twitterTags?: {
			url: string;
			title: string;
			description: string;
			image: ImageMeta;
			/** @see https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards */
			card?: 'summary' | 'summary_large_image';
		};
		/** e.g. `noindex`, `max-snippet:-1`, `nosnippet` — see Google Search docs on robots/snippet controls. */
		robots?: string;
	}

	const { ldJsons, primaryTags, facebookTags, twitterTags, robots }: Props = $props();

	/** Escape `<` in JSON so a literal closing script tag inside a string cannot break the document (XSS / parse safety). */
	function jsonLdInner(schema: JsonLd): string {
		return JSON.stringify(schema).replace(/</g, '\\u003c');
	}

	function jsonLdScript(schema: JsonLd): string {
		return `<script type="application/ld+json">${jsonLdInner(schema)}</` + 'script>';
	}

	const ogTitle = $derived(facebookTags?.title ?? primaryTags.title);
	const ogUrl = $derived(facebookTags?.url ?? primaryTags.url);
	const ogDescription = $derived(facebookTags?.description ?? primaryTags.description);
	const ogType = $derived(facebookTags?.type ?? 'website');
	const ogLocale = $derived(facebookTags?.locale ?? 'en_US');
	const ogSiteName = $derived(facebookTags?.siteName ?? primaryTags.siteName);

	const twCard = $derived(twitterTags?.card ?? 'summary_large_image');
	const twUrl = $derived(twitterTags?.url ?? primaryTags.url);
	const twTitle = $derived(twitterTags?.title ?? primaryTags.title);
	const twDescription = $derived(twitterTags?.description ?? primaryTags.description);
	const twImage = $derived(twitterTags?.image ?? primaryTags.image);
</script>

<svelte:head>
	{#if ldJsons?.length}
		{#each ldJsons as jsonLd, i (i)}
			<!--eslint-disable-next-line svelte/no-at-html-tags-->
			{@html jsonLdScript(jsonLd)}
		{/each}
	{/if}

	<title>{primaryTags.title}</title>
	<meta name="description" content={primaryTags.description} />
	{#if primaryTags.keywords}
		<meta name="keywords" content={primaryTags.keywords} />
	{/if}
	{#if primaryTags.author}
		<meta name="author" content={primaryTags.author} />
	{/if}
	{#if robots}
		<meta name="robots" content={robots} />
	{/if}

	<!-- Open Graph (fallbacks from primaryTags when facebookTags omitted) -->
	<meta property="og:title" content={ogTitle} />
	<meta property="og:url" content={ogUrl} />
	<meta property="og:description" content={ogDescription} />
	<meta property="og:type" content={ogType} />
	<meta property="og:locale" content={ogLocale} />
	{#if ogSiteName}
		<meta property="og:site_name" content={ogSiteName} />
	{/if}
	<meta property="og:image" content={primaryTags.image.url} />
	<meta property="og:image:secure_url" content={primaryTags.image.url} />
	<meta property="og:image:type" content={primaryTags.image.type ?? 'image/png'} />
	<meta property="og:image:width" content={primaryTags.image.width.toString()} />
	<meta property="og:image:height" content={primaryTags.image.height.toString()} />
	<meta property="og:image:alt" content={primaryTags.image.alt} />

	<link rel="canonical" href={primaryTags.url} />

	<!-- Twitter / X Cards: use `name`, not `property` (Twitter Card spec) -->
	<meta name="twitter:card" content={twCard} />
	<meta name="twitter:url" content={twUrl} />
	<meta name="twitter:title" content={twTitle} />
	<meta name="twitter:description" content={twDescription} />
	<meta name="twitter:image" content={twImage.url} />
	<meta name="twitter:image:width" content={twImage.width.toString()} />
	<meta name="twitter:image:height" content={twImage.height.toString()} />
	<meta name="twitter:image:alt" content={twImage.alt} />
</svelte:head>
