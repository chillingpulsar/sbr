<script lang="ts">
	import { BlocksRenderer, type BlocksContent } from '$lib';

	interface Props {
		sampleContent: BlocksContent;
	}

	const { sampleContent }: Props = $props();
</script>

<section class="">
	<div class="sbr-renderer">
		<BlocksRenderer content={sampleContent} />
	</div>
</section>
