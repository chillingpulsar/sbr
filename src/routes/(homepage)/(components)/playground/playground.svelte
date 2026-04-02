<script lang="ts">
	import { BlocksRenderer, type BlocksContent } from '$lib';
	import Textarea from '$lib/components/internals/textarea/textarea.svelte';
	import Button from '$lib/components/internals/button/button.svelte';

	interface Props {
		sampleContent: BlocksContent;
	}

	const { sampleContent }: Props = $props();

	// Intentional: fresh stringify when parent remounts (see +page `{#key}`).
	// svelte-ignore state_referenced_locally
	let contentJson = $state(JSON.stringify(sampleContent, null, 4));

	const parsed = $derived.by(
		(): { ok: true; value: BlocksContent } | { ok: false; error: string } => {
			try {
				return { ok: true, value: JSON.parse(contentJson) as BlocksContent };
			} catch (e) {
				const message = e instanceof Error ? e.message : 'Invalid JSON';
				return { ok: false, error: message };
			}
		}
	);

	let isPreview = $state(false);

	const handlePreview = () => (isPreview = !isPreview);
</script>

<section class="flex flex-col gap-4">
	<div class="border-b p-2">
		<Button
			variant="outline"
			class={[
				'shadow-none hover:bg-transparent',
				!isPreview ? ' border font-bold' : 'border-none font-normal'
			]}
			onclick={handlePreview}
		>
			Write Sample Here
		</Button>
		<Button
			variant="outline"
			class={[
				'shadow-none hover:bg-transparent',
				isPreview ? ' border font-bold' : 'border-none font-normal'
			]}
			onclick={handlePreview}
		>
			Preview
		</Button>
	</div>

	{#if isPreview}
		<div class="sbr-renderer">
			{#if parsed.ok}
				<BlocksRenderer content={parsed.value} />
			{:else}
				<p class="text-sm text-destructive" role="alert">{parsed.error}</p>
			{/if}
		</div>
	{:else}
		<div class="">
			<Textarea bind:value={contentJson} />
		</div>
	{/if}
</section>
