<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		format: 'ordered' | 'unordered';
		children: Snippet;
	}

	let { format, children }: Props = $props();
</script>

{#if format === 'ordered'}
	<ol>{@render children()}</ol>
{:else}
	<ul>{@render children()}</ul>
{/if}
