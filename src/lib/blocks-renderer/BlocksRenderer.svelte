<script lang="ts">
	import { setContext } from 'svelte';
	import type {
		RootNode,
		Node,
		BlockComponentProps,
		ModifierComponentProps,
		Modifier
	} from './types.js';
	import Block from './Block.svelte';

	// Component imports for default components
	import Paragraph from './components/Paragraph.svelte';
	import Quote from './components/Quote.svelte';
	import CodeBlock from './components/CodeBlock.svelte';
	import Heading from './components/Heading.svelte';
	import Link from './components/Link.svelte';
	import List from './components/List.svelte';
	import ListItem from './components/ListItem.svelte';
	import Image from './components/Image.svelte';
	import Bold from './components/Bold.svelte';
	import Italic from './components/Italic.svelte';
	import Underline from './components/Underline.svelte';
	import Strikethrough from './components/Strikethrough.svelte';
	import InlineCode from './components/InlineCode.svelte';

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
	setContext('blocks-renderer', contextValue);
</script>

{#key content}
	{#each content as block, index (index)}
		<Block content={block} />
	{/each}
{/key}
