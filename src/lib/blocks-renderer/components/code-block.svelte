<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		/** When set (e.g. by a custom serializer), used instead of rendered children. */
		plainText?: string;
		children?: Snippet;
	}

	let { plainText, children }: Props = $props();
</script>

<pre><code
		>{#if children}{@render children()}{:else}{plainText ?? ''}{/if}</code
	></pre>
