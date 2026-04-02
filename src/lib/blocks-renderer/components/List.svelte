<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		format: 'ordered' | 'unordered';
		children: Snippet;
	}

	let { format, children }: Props = $props();

	const ordered = $derived(String(format ?? 'unordered').toLowerCase() === 'ordered');
</script>

{#if ordered}
	<ol>{@render children()}</ol>
{:else}
	<ul>{@render children()}</ul>
{/if}
