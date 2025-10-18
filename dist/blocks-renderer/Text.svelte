<script lang="ts">
	import { getRenderCTX } from './blocks-renderer.svelte';
	import type { Modifier } from './types.js';
	import Self from './text.svelte';

	interface Props {
		text: string;
		bold?: boolean;
		italic?: boolean;
		underline?: boolean;
		strikethrough?: boolean;
		code?: boolean;
	}

	let { text, ...modifiers }: Props = $props();

	// Get context from BlocksRenderer
	const renderCTX = getRenderCTX();
	// Get active modifiers
	const activeModifiers = $derived(() => {
		return Object.keys(modifiers).filter((key) => modifiers[key as Modifier]) as Modifier[];
	});
</script>

<!-- Build nested components from outside to inside -->
{#if activeModifiers().length === 0}
	<!-- No modifiers, just render text with line breaks -->
	{#each text.split(/\r?\n|\r/g) as part, idx}
		{#if idx > 0}<br />{/if}{part}
	{/each}
{:else}
	{@const modifiers_list = activeModifiers()}
	{@const outerModifier = modifiers_list[0]}
	{@const ModifierComponent = renderCTX.blocks[outerModifier]}
	{#if ModifierComponent}
		{@const Component = ModifierComponent}
		<Component>
			{#snippet children()}
				{#if modifiers_list.length === 1}
					<!-- Last modifier, render the actual text -->
					{#each text.split(/\r?\n|\r/g) as part, idx}
						{#if idx > 0}<br />{/if}{part}
					{/each}
				{:else}
					<!-- More modifiers to apply -->
					<Self {text} {...Object.fromEntries(modifiers_list.slice(1).map((m) => [m, true]))} />
				{/if}
			{/snippet}
		</Component>
	{:else}
		<!-- Component not found, skip this modifier -->
		{renderCTX.addMissingBlockType(outerModifier)}

		{#if modifiers_list.length === 1}
			{#each text.split(/\r?\n|\r/g) as part, idx}
				{#if idx > 0}<br />{/if}{part}
			{/each}
		{:else}
			<Self {text} {...Object.fromEntries(modifiers_list.slice(1).map((m) => [m, true]))} />
		{/if}
	{/if}
{/if}
