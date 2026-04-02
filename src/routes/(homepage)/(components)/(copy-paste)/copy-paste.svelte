<script lang="ts">
	import IconCopy from '@tabler/icons-svelte/icons/copy';
	import IconCheck from '@tabler/icons-svelte/icons/check';

	interface Props {
		value: string;
	}

	const { value }: Props = $props();

	let isCopied = $state(false);

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(value);
		isCopied = true;
		setTimeout(() => {
			isCopied = false;
		}, 500);
	};
</script>

<button disabled={isCopied} onclick={copyToClipboard} class="flex flex-col gap-1 text-left">
	<div
		class={[
			'grid cursor-copy grid-cols-[1fr_auto] items-center gap-2 rounded-lg px-3 py-1.5 transition-all duration-300 hover:ring',
			isCopied ? 'bg-0bgreen/10 ring-0bgreen ring-2' : 'bg-accent'
		]}
	>
		{#if isCopied}
			<p class="text-0bgreen text-center text-xs leading-normal font-medium">copied</p>
			<IconCheck class="text-0bgreen size-4" />
		{:else}
			<p class="text-xs leading-normal font-medium text-foreground">{value}</p>
			<IconCopy class="size-4 text-foreground" />
		{/if}
	</div>
</button>
