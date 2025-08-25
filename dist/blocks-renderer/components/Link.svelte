<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		url: string;
		children: Snippet;
	}

	let { url, children }: Props = $props();
</script>

<a href={url}>{@render children()}</a>
