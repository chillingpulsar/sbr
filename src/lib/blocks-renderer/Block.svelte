<script lang="ts">
	import type { Node } from './types.js';
	import Text from './Text.svelte';
	import Self from './Block.svelte';
	import { getRenderCTX, type BlockLikeComponent } from './blocks-renderer.svelte';

	interface Props {
		content: Node;
	}

	let { content }: Props = $props();

	const renderCTX = getRenderCTX();

	const voidTypes = ['image'];

	function normalizeBlockType(t: unknown): string {
		if (typeof t === 'string') return t.toLowerCase();
		return String(t);
	}

	const block = $derived.by(() => {
		const { type, children, ...rest } = content;
		const nodes = Array.isArray(children) ? children : [];
		const typeKey = normalizeBlockType(type);
		const blocksMap = renderCTX.blocks as Record<string, BlockLikeComponent | undefined>;
		return {
			typeKey,
			nodes,
			rest,
			component: blocksMap[typeKey]
		};
	});
</script>

{#if block.component}
	{@const BlockComponent = block.component}
	{#if block.typeKey === 'paragraph' && block.nodes.length === 1 && block.nodes[0].type === 'text' && block.nodes[0].text === ''}
		<br />
	{:else if voidTypes.includes(block.typeKey)}
		<BlockComponent {...block.rest} />
	{:else}
		<BlockComponent {...block.rest}>
			{#each block.nodes as child, index (index)}
				{#if child.type === 'text'}
					<Text {...child} />
				{:else}
					<Self content={child} />
				{/if}
			{/each}
		</BlockComponent>
	{/if}
{:else}
	{renderCTX.addMissingBlockType(block.typeKey)}
{/if}
