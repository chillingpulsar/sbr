<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<blockquote
	style="margin: 1.5em 2em; padding: 1em; border-left: 4px solid #ccc; background: #f9f9f9; font-style: italic; color: #666;"
>
	{@render children()}
</blockquote>
