<script lang="ts">
	import IconLink from '@tabler/icons-svelte/icons/link';
	import IconHandFingerLeft from '@tabler/icons-svelte/icons/hand-finger-left';
</script>

<footer class="border-t bg-secondary">
	<section
		class="container mx-auto flex min-h-[150px] flex-wrap items-center justify-between gap-4 p-4"
	>
		<div class="flex items-center gap-1">
			<p class="text-sm text-muted-foreground">Made with ❤️ by</p>
			<a
				target="_blank"
				href="https://github.com/chillingpulsar"
				class="flex items-center gap-1 text-sm text-muted-foreground underline"
			>
				<b>Mike</b> John
				<IconHandFingerLeft class="size-4 animate-bounce" />
			</a>
		</div>
	</section>
</footer>
