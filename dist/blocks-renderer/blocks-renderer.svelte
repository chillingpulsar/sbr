<script lang="ts" module>
	import { createContext } from 'svelte';
	export const [getRenderCTX, setRenderCTX] = createContext<{
		blocks: Record<string, any>;
		addMissingBlockType: (type: string) => void;
	}>();
</script>

<script lang="ts">
	import type {
		RootNode,
		Node,
		BlockComponentProps,
		ModifierComponentProps,
		Modifier
	} from './types.js';
	import Block from './block.svelte';

	// Component imports for default components
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
		content: RootNode[];
		blocks?: Partial<Record<Node['type'], any>>;
		modifiers?: Partial<Record<Modifier, any>>;
	}

	let { content, blocks = {}, modifiers = {} }: Props = $props();

	// Default block components
	const defaultBlocks: Record<Node['type'], any> = {
		paragraph: Paragraph,
		quote: Quote,
		code: CodeBlock,
		heading: Heading,
		link: Link,
		list: List,
		'list-item': ListItem,
		image: Image
	};

	// Default modifier components
	const defaultModifiers: Record<Modifier, any> = {
		bold: Bold,
		italic: Italic,
		underline: Underline,
		strikethrough: Strikethrough,
		code: InlineCode
	};

	// Merge default components with custom ones
	const finalBlocks = { ...defaultBlocks, ...blocks };
	const finalModifiers = { ...defaultModifiers, ...modifiers };

	// Missing component tracking (non-reactive containers to avoid unsafe state writes during render)
	const missingBlockTypes = new Set<string>();
	const missingModifierTypes = new Set<string>();

	// Context value
	const contextValue = {
		blocks: finalBlocks,
		modifiers: finalModifiers,
		missingBlockTypes,
		missingModifierTypes,
		addMissingBlockType: (type: string) => {
			missingBlockTypes.add(type);
		},
		addMissingModifierType: (type: string) => {
			missingModifierTypes.add(type);
		}
	};

	// Set context for child components
	setRenderCTX(contextValue);
</script>

{#key content}
	{#each content as block, index (index)}
		<Block content={block} />
	{/each}
{/key}
