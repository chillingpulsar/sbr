# sbr

Svelte 5 renderer for Strapi rich-text blocks. Tailwind v4–friendly; override blocks and modifiers as needed.

## Install

```bash
bun add sbr-mike
# npm i sbr-mike | pnpm add sbr-mike | yarn add sbr-mike
```

## Use

```svelte
<script lang="ts">
	import { BlocksRenderer } from 'sbr-mike';

	const content = [
		{ type: 'paragraph', children: [{ text: 'Hello world' }] },
		{ type: 'heading', level: 2, children: [{ text: 'Title' }] }
	];
</script>

<BlocksRenderer {content} />
```

Optional `blocks` and `modifiers` props override default components.

```ts
import type { RootNode, Node, BlocksContent, ParagraphBlockNode, HeadingBlockNode } from 'sbr-mike';
```

Licensed under the GNU General Public License v3. See [LICENSE](LICENSE) for details.
