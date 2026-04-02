<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		level: 1 | 2 | 3 | 4 | 5 | 6;
		children: Snippet;
	}

	let { level, children }: Props = $props();

	/**
	 * CMS / GraphQL often send `level` as a string (`"1"`). Compare numeric `k`, not `level === 1`.
	 */
	const k = $derived.by(() => {
		const n = Number(level);
		return Number.isFinite(n) ? Math.min(6, Math.max(1, Math.trunc(n))) : 1;
	});
</script>

{#if k === 1}
	<h1>{@render children()}</h1>
{:else if k === 2}
	<h2>{@render children()}</h2>
{:else if k === 3}
	<h3>{@render children()}</h3>
{:else if k === 4}
	<h4>{@render children()}</h4>
{:else if k === 5}
	<h5>{@render children()}</h5>
{:else}
	<h6>{@render children()}</h6>
{/if}
