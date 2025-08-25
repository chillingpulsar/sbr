<script lang="ts">
	import { getContext } from 'svelte';
	import type { Node } from './types.js';
	import Text from './Text.svelte';
	import Self from './Block.svelte';

	interface Props {
		content: any;
	}

	let { content }: Props = $props();

	// Get context from BlocksRenderer
	const context = getContext('blocks-renderer') as {
		blocks: Record<string, any>;
		addMissingBlockType: (type: string) => void;
	};

	const voidTypes = ['image'];

	// EXACT copy of reference implementation, avoiding name clash with snippet `children`
	const { type, children: nodes, ...rest } = content;
	const BlockComponent = context.blocks[type];
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
