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

MIT License

Copyright (c) 2025 MY NAME IS VERY LOOOOOOONG

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
