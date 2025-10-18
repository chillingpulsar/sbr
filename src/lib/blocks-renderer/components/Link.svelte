<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		url: string;
		children: Snippet;
	}

	let { url, children }: Props = $props();
</script>

<a href={url} target="_blank" rel="noopener noreferrer">{@render children()}</a>
