# Svelte 5 Blocks Renderer

A modern Svelte 5 port of the React blocks renderer, built with the latest runes syntax and snippet system.

## Features

- ✅ **Svelte 5 Compatible** - Built with runes (`$state`, `$derived`, `$props`) and snippets
- ✅ **TypeScript Support** - Fully typed with comprehensive interfaces
- ✅ **Extensible** - Customize or replace any block or modifier component
- ✅ **Rich Content** - Support for headings, paragraphs, lists, quotes, code, images, and links
- ✅ **Text Modifiers** - Bold, italic, underline, strikethrough, and inline code
- ✅ **Line Break Handling** - Proper rendering of line breaks within text
- ✅ **Context System** - Centralized component management and error handling

## Installation

This package is part of your Svelte project. Import it from `$lib`:

```typescript
import { BlocksRenderer, type BlocksContent } from '$lib';
```

## Basic Usage

```svelte
<script lang="ts">
	import { BlocksRenderer, type BlocksContent } from '$lib';

	const content: BlocksContent = [
		{
			type: 'heading',
			level: 1,
			children: [
				{
					type: 'text',
					text: 'Welcome to Blocks Renderer',
					bold: true
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					type: 'text',
					text: 'This is a paragraph with '
				},
				{
					type: 'text',
					text: 'bold text',
					bold: true
				},
				{
					type: 'text',
					text: ' and '
				},
				{
					type: 'text',
					text: 'italic text',
					italic: true
				}
			]
		}
	];
</script>

<BlocksRenderer {content} />
```

## Supported Block Types

### Text Blocks

- `paragraph` - Standard paragraph
- `heading` - Headings (levels 1-6)
- `quote` - Blockquotes
- `code` - Code blocks with syntax highlighting

### Lists

- `list` - Ordered or unordered lists
- `list-item` - Individual list items

### Media

- `image` - Images with alt text and captions

### Inline Elements

- `link` - Hyperlinks
- `text` - Text with modifiers (bold, italic, underline, strikethrough, code)

## Text Modifiers

Text nodes support the following modifiers:

```typescript
{
  type: 'text',
  text: 'Your text here',
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}
```

## Custom Components

You can replace any default component with your own:

```svelte
<script lang="ts">
	import { BlocksRenderer, type BlocksContent } from '$lib';
	import MyCustomHeading from './MyCustomHeading.svelte';
	import MyCustomParagraph from './MyCustomParagraph.svelte';

	const content: BlocksContent = [
		/* your content */
	];

	const customBlocks = {
		heading: MyCustomHeading,
		paragraph: MyCustomParagraph
	};

	const customModifiers = {
		bold: MyCustomBold
	};
</script>

<BlocksRenderer {content} blocks={customBlocks} modifiers={customModifiers} />
```

### Custom Component Props

Block components receive these props:

- All properties from the block node (except `type` and `children`)
- `children` - A Svelte snippet containing child content
- `plainText` - For code and heading blocks, a plain text version

Modifier components receive:

- `children` - A Svelte snippet containing the text content

## Example Content Structure

```typescript
const sampleContent: BlocksContent = [
	{
		type: 'heading',
		level: 2,
		children: [{ type: 'text', text: 'Features' }]
	},
	{
		type: 'list',
		format: 'unordered',
		children: [
			{
				type: 'list-item',
				children: [
					{ type: 'text', text: 'Modern ' },
					{ type: 'text', text: 'Svelte 5', bold: true },
					{ type: 'text', text: ' syntax' }
				]
			},
			{
				type: 'list-item',
				children: [{ type: 'text', text: 'TypeScript support' }]
			}
		]
	},
	{
		type: 'code',
		children: [{ type: 'text', text: 'const greeting = "Hello, Svelte 5!";' }]
	}
];
```

## Error Handling

The renderer gracefully handles missing components by:

- Logging warnings to the console
- Tracking missing component types
- Continuing to render other content

## Migration from React Version

The API is nearly identical to the React version, with these key differences:

1. **Snippets instead of JSX children**: Components use Svelte's snippet system
2. **Runes syntax**: Built with `$props()`, `$derived()`, and `$state()`
3. **Component imports**: Use Svelte component imports instead of React components
4. **Context**: Uses Svelte's `getContext`/`setContext` instead of React Context

## Development

The renderer includes a demo page at `/` with sample content showcasing all supported features.

Start the development server:

```bash
bun dev
```

## TypeScript

All types are exported from the main module:

```typescript
import type {
	BlocksContent,
	RootNode,
	TextInlineNode
	// ... other types
} from '$lib';
```
