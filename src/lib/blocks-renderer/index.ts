// Export the main component
export { default as BlocksRenderer } from './blocks-renderer.svelte';

// Export types
export type {
	RootNode,
	Node,
	BlocksContent,
	TextInlineNode,
	LinkInlineNode,
	ListItemInlineNode,
	DefaultInlineNode,
	NonTextInlineNode,
	ParagraphBlockNode,
	QuoteBlockNode,
	CodeBlockNode,
	HeadingBlockNode,
	ListBlockNode,
	ImageBlockNode,
	Modifier,
	BlockComponentProps,
	ModifierComponentProps
} from './types.js';

// Export default components for customization
export { default as Paragraph } from './components/paragraph.svelte';
export { default as Quote } from './components/quote.svelte';
export { default as CodeBlock } from './components/code-block.svelte';
export { default as Heading } from './components/heading.svelte';
export { default as Link } from './components/link.svelte';
export { default as List } from './components/list.svelte';
export { default as ListItem } from './components/list-item.svelte';
export { default as Image } from './components/image.svelte';
export { default as Bold } from './components/bold.svelte';
export { default as Italic } from './components/italic.svelte';
export { default as Underline } from './components/underline.svelte';
export { default as Strikethrough } from './components/strike-through.svelte';
export { default as InlineCode } from './components/inline-code.svelte';
