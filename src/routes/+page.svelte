<script lang="ts">
	import Playground from './(components)/(playground)/playground.svelte';
</script>

<main class="flex min-h-screen flex-col gap-4 p-4 md:py-10">
	<section class="container mx-auto">
		<h1 class="text-2xl font-bold tracking-widest md:text-4xl">Blocks Renderer Demo</h1>
		<p class="text-base text-balance text-muted-foreground">
			Testing the Svelte 5 port of the React blocks renderer
		</p>

		<div class="">
			<Playground />
		</div>
	</section>
</main>
