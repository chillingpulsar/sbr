<script lang="ts">
	import type { Node } from './types.js';
	import Text from './text.svelte';
	import Self from './block.svelte';
	import { getRenderCTX } from './blocks-renderer.svelte';

	interface Props {
		content: Node;
	}

	let { content }: Props = $props();

	// Get context from BlocksRenderer
	const renderCTX = getRenderCTX();

	const voidTypes = ['image'];

	// EXACT copy of reference implementation, avoiding name clash with snippet `children`
	const { type, children: nodes, ...rest } = content;
	const BlockComponent = renderCTX.blocks[type];
</script>

{#if BlockComponent}
	{#if type === 'paragraph' && nodes.length === 1 && nodes[0].type === 'text' && nodes[0].text === ''}
		<br />
	{:else if voidTypes.includes(type)}
		<BlockComponent {...rest} />
	{:else}
		<BlockComponent {...rest}>
			{#snippet children()}
				{#each nodes as child, index (index)}
					{#if child.type === 'text'}
						<Text {...child} />
					{:else}
						<Self content={child} />
					{/if}
				{/each}
			{/snippet}
		</BlockComponent>
	{/if}
{/if}
