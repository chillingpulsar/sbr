<script lang="ts">
	import { BlocksRenderer, type BlocksContent } from '$lib';

	// Sample content to test the blocks renderer
	let content = $state<BlocksContent>([
		{
			type: 'heading',
			children: [
				{
					type: 'text',
					text: 'This is a stunning silhouette'
				}
			],
			level: 2
		},
		{
			type: 'paragraph',
			children: [
				{
					type: 'text',
					text: 'Photograph '
				},
				{
					type: 'text',
					text: 'captured during sunset ',
					underline: true
				},
				{
					type: 'text',
					text: "or sunrise at what appears to be a tropical beach. In the foreground, a person is sitting or reclining in a traditional wooden boat that's positioned in the shallow water near the shore. The sky is ablaze with warm golden and orange hues as the sun sits low on the horizon, creating a "
				},
				{
					type: 'text',
					text: 'dramatic backlight',
					bold: true
				},
				{
					type: 'text',
					text: ' effect.'
				}
			]
		},
		{
			type: 'quote',
			children: [
				{
					type: 'text',
					text: 'On the left side of the image, several other people are visible as dark silhouettes, possibly standing on the beach or in '
				},
				{
					type: 'text',
					text: 'shallow water',
					bold: true
				},
				{
					type: 'text',
					text: ". On the right side, there's a rocky outcrop or cliff formation. The entire scene is rendered in silhouette against the brilliant sunset, creating a strong contrast between the dark figures and the luminous sky. The water reflects the golden light, and the overall composition evokes a sense of tranquility and the simple beauty of coastal life."
				}
			]
		}
	]);
</script>

<h1>Blocks Renderer Demo</h1>
<p>Testing the Svelte 5 port of the React blocks renderer</p>

<div class="demo">
	<BlocksRenderer {content} />
</div>

<button
	onclick={() => {
		content = [
			{
				type: 'heading',
				children: [
					{
						type: 'text',
						text: 'Ito ay isang kahanga-hangang larawan'
					}
				],
				level: 2
			},
			{
				type: 'paragraph',
				children: [
					{
						type: 'text',
						text: 'Larawang silueta na kinunan sa panahon ng paglilinlim o pagsikat ng araw sa tila isang tropikong dalampasigan. Sa harapan, may isang taong nakaupo o '
					},
					{
						type: 'text',
						text: 'nakahiga sa',
						bold: true
					},
					{
						type: 'text',
						text: ' loob ng isang tradisyonal na bangkang kahoy na nakaposisyon sa mababaw na tubig malapit sa pampang. Ang kalangitan ay nagniningas ng mainit na kulay ginto at '
					},
					{
						type: 'text',
						text: 'kahel habang ang ara',
						underline: true
					},
					{
						type: 'text',
						text: 'w ay mababa sa abot-tanaw, na lumilikha ng dramatikong epekto ng liwanag mula sa likuran.'
					}
				]
			},
			{
				type: 'quote',
				children: [
					{
						type: 'text',
						text: 'Sa kaliwang bahagi ng larawan, makikita ang ilang iba pang mga tao bilang madidilim na silueta, marahil ay nakatayo sa dalampasigan o sa mababaw na tubig. Sa kanang bahagi, may batuhan o talampas. Ang buong eksena ay nakalarawan bilang silueta laban sa maningning na paglilinlim, na lumilikha ng malakas na kaibahan sa pagitan ng madidilim na mga pigura at ang maliwanag na kalangitan. Ang tubig ay sumasalamin sa gintong liwanag, at ang kabuuang komposisyon ay nagpapahiwatig ng pakiramdam ng katahimikan at ang simpleng kagandahan ng buhay sa baybayin.'
					}
				]
			}
		];
	}}>Update Content in SPA way</button
>
