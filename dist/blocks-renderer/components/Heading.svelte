<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		level: 1 | 2 | 3 | 4 | 5 | 6;
		children: Snippet;
	}

	let { level, children }: Props = $props();
</script>

{#if level === 1}
	<h1>{@render children()}</h1>
{:else if level === 2}
	<h2>{@render children()}</h2>
{:else if level === 3}
	<h3>{@render children()}</h3>
{:else if level === 4}
	<h4>{@render children()}</h4>
{:else if level === 5}
	<h5>{@render children()}</h5>
{:else if level === 6}
	<h6>{@render children()}</h6>
{/if}
