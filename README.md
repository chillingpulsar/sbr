# sbr — Svelte Blocks Renderer

Lightweight, customizable Svelte 5 renderer for strapi rich-text blocks.

## Installation

```bash
bun add sbr-mikey
# or: npm i sbr-mikey / pnpm add sbr-mikey / yarn add sbr-mikey
```

## Usage

```svelte
<script lang="ts">
	import { BlocksRenderer } from 'sbr-mikey';

	const content = [
		{ type: 'paragraph', children: [{ text: 'Hello world' }] },
		{ type: 'heading', level: 2, children: [{ text: 'Title' }] }
	];

	// Optionally override default block/modifier components
	const blocks = {};
	const modifiers = {};
</script>

<BlocksRenderer {content} {blocks} {modifiers} />
```

### Types

```ts
import type {
	RootNode,
	Node,
	BlocksContent,
	ParagraphBlockNode,
	HeadingBlockNode
} from 'sbr-mikey';
```

## Styling

- Works out-of-the-box with Tailwind v4 utility classes.
- Components are small and unopinionated; override via `blocks` and `modifiers`.

## Svelte compatibility

- Peer dependency: `
