<script lang="ts">
	import { getRenderCTX } from './blocks-renderer.svelte';
	import type { Modifier } from './types.js';

	interface Props {
		text: string;
		bold?: boolean;
		italic?: boolean;
		underline?: boolean;
		strikethrough?: boolean;
		code?: boolean;
	}

	let { text, ...modifierFlags }: Props = $props();

	const renderCTX = getRenderCTX();

	const activeModifiers = $derived.by(() => {
		return Object.keys(modifierFlags).filter((key) => modifierFlags[key as Modifier]) as Modifier[];
	});
</script>

<!-- Build nested components from outside to inside -->
{#snippet lines()}
	{#each (text ?? '').split(/\r?\n|\r/g) as part, idx (idx)}
		{#if idx > 0}<br />{/if}{part}
	{/each}
{/snippet}

{#snippet renderWithModifiers(mods: Modifier[])}
	{#if mods.length === 0}
		{@render lines()}
	{:else}
		{@const outer = mods[0]}
		{@const ModifierComponent = renderCTX.modifiers[outer]}
		{#if ModifierComponent}
			{@const Component = ModifierComponent}
			<Component>
				{@render renderWithModifiers(mods.slice(1))}
			</Component>
		{:else}
			<!-- Modifier not registered: tracked in a plain Set (non-reactive) -->
			{renderCTX.addMissingModifierType(outer)}
			{@render renderWithModifiers(mods.slice(1))}
		{/if}
	{/if}
{/snippet}

{#if activeModifiers.length === 0}
	{@render lines()}
{:else}
	{@render renderWithModifiers(activeModifiers)}
{/if}
