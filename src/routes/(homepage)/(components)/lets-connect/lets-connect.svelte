<script lang="ts">
	import { socials } from '$lib';
</script>

<section class="flex items-center flex-col gap-2 justify-center mt-20">
	<ul class="flex items-center flex-wrap gap-1 md:gap-4">
		{#each socials as social (social)}
			<li>
				<a
					rel="noopener noreferrer external"
					target="_blank"
					href={social.href}
					class="flex items-center gap-2 group"
				>
					<social.icon
						class="size-4 text-muted-foreground group-hover:text-foreground group-active:text-foreground"
					/>
					<span
						class="text-muted-foreground text-sm underline underline-offset-4 group-hover:text-foreground group-active:text-foreground group-hover:decoration-foreground group-active:decoration-foreground"
					>
						{social.label}
					</span>
				</a>
			</li>
		{/each}
	</ul>
	<p class="text-muted-foreground text-sm">Let's connect</p>
</section>
