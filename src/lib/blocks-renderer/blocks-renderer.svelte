<script lang="ts" module>
	import { createContext } from 'svelte';
	import type { Component } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import type { Modifier, Node } from './types.js';

	/**
	 * Dynamic Svelte components for blocks/modifiers (Strapi payload shapes differ per type).
	 */
	export type BlockLikeComponent = Component<
		Record<string, unknown>,
		Record<string, unknown>,
		string
	>;

	/**
	 * Context for rendering Strapi-style rich text blocks and inline modifiers.
	 */
	export type BlocksRenderContext = {
		blocks: Record<Node['type'], BlockLikeComponent>;
		modifiers: Record<Modifier, BlockLikeComponent>;
		missingBlockTypes: SvelteSet<string>;
		missingModifierTypes: SvelteSet<string>;
		addMissingBlockType: (type: string) => void;
		addMissingModifierType: (type: string) => void;
	};

	export const [getRenderCTX, setRenderCTX] = createContext<BlocksRenderContext>();
</script>

<script lang="ts">
	import type { RootNode } from './types.js';
	import Block from './block.svelte';

	import Paragraph from './components/paragraph.svelte';
	import Quote from './components/quote.svelte';
	import CodeBlock from './components/code-block.svelte';
	import Heading from './components/heading.svelte';
	import Link from './components/link.svelte';
	import List from './components/list.svelte';
	import ListItem from './components/list-item.svelte';
	import Image from './components/image.svelte';
	import Bold from './components/bold.svelte';
	import Italic from './components/italic.svelte';
	import Underline from './components/underline.svelte';
	import Strikethrough from './components/strike-through.svelte';
	import InlineCode from './components/inline-code.svelte';

	interface Props {
		/** Strapi Blocks root nodes (richtext JSON). */
		content: RootNode[];
		blocks?: Partial<Record<Node['type'], BlockLikeComponent>>;
		modifiers?: Partial<Record<Modifier, BlockLikeComponent>>;
	}

	let { content, blocks = {}, modifiers = {} }: Props = $props();

	const defaultBlocks = {
		paragraph: Paragraph,
		quote: Quote,
		code: CodeBlock,
		heading: Heading,
		link: Link,
		list: List,
		'list-item': ListItem,
		image: Image
	} as unknown as Record<Node['type'], BlockLikeComponent>;

	const defaultModifiers = {
		bold: Bold,
		italic: Italic,
		underline: Underline,
		strikethrough: Strikethrough,
		code: InlineCode
	} as unknown as Record<Modifier, BlockLikeComponent>;

	const mergedBlocks = $derived({ ...defaultBlocks, ...blocks });
	const mergedModifiers = $derived({ ...defaultModifiers, ...modifiers });

	const missingBlockTypes = new SvelteSet<string>();
	const missingModifierTypes = new SvelteSet<string>();

	const contextValue: BlocksRenderContext = {
		get blocks() {
			return mergedBlocks;
		},
		get modifiers() {
			return mergedModifiers;
		},
		missingBlockTypes,
		missingModifierTypes,
		/**
		 * Defer `.add()` to a microtask so we never mutate reactive SvelteSets synchronously
		 * during render / hydration (that caused visible flicker: content briefly then gone).
		 */
		addMissingBlockType: (type: string) => {
			queueMicrotask(() => {
				missingBlockTypes.add(type);
			});
		},
		addMissingModifierType: (type: string) => {
			queueMicrotask(() => {
				missingModifierTypes.add(type);
			});
		}
	};

	setRenderCTX(contextValue);
</script>

{#each content as block, index (index)}
	<Block content={block} />
{/each}
