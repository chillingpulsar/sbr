<script lang="ts">
	import { BlocksRenderer, type BlocksContent } from '$lib';

	// Sample content to test the blocks renderer
	const content: BlocksContent = [
		{
			type: 'image',
			image: {
				ext: '.png',
				url: 'https://cms.kinetic.co.th/uploads/busch_timeline_2f6d7bae12.png',
				hash: 'busch_timeline_2f6d7bae12',
				mime: 'image/png',
				name: 'busch-timeline.png',
				size: 168.21,
				width: 1280,
				height: 284,
				caption: null,
				formats: {
					large: {
						ext: '.png',
						url: '/uploads/large_busch_timeline_2f6d7bae12.png',
						hash: 'large_busch_timeline_2f6d7bae12',
						mime: 'image/png',
						name: 'large_busch-timeline.png',
						path: null,
						size: 477.1,
						width: 1000,
						height: 222
					},
					small: {
						ext: '.png',
						url: '/uploads/small_busch_timeline_2f6d7bae12.png',
						hash: 'small_busch_timeline_2f6d7bae12',
						mime: 'image/png',
						name: 'small_busch-timeline.png',
						path: null,
						size: 132.93,
						width: 500,
						height: 111
					},
					medium: {
						ext: '.png',
						url: '/uploads/medium_busch_timeline_2f6d7bae12.png',
						hash: 'medium_busch_timeline_2f6d7bae12',
						mime: 'image/png',
						name: 'medium_busch-timeline.png',
						path: null,
						size: 281.12,
						width: 750,
						height: 166
					},
					thumbnail: {
						ext: '.png',
						url: '/uploads/thumbnail_busch_timeline_2f6d7bae12.png',
						hash: 'thumbnail_busch_timeline_2f6d7bae12',
						mime: 'image/png',
						name: 'thumbnail_busch-timeline.png',
						path: null,
						size: 35.53,
						width: 245,
						height: 54
					}
				},
				provider: 'local',
				createdAt: '2025-08-25T05:29:02.592Z',
				updatedAt: '2025-08-25T05:29:02.592Z',
				previewUrl: null,
				alternativeText: 'busch-timeline.png',
				provider_metadata: null
			},
			children: [{ text: '', type: 'text' }]
		},
		{ type: 'paragraph', children: [{ text: '', type: 'text' }] },
		{ type: 'quote', children: [{ text: 'BUSCH', type: 'text' }] },
		{
			type: 'paragraph',
			children: [
				{ text: 'Founded in 1963 by ', type: 'text' },
				{ bold: true, text: 'Dr. Karl Busch', type: 'text' },
				{ text: ' and his wife ', type: 'text' },
				{ bold: true, text: 'Ayhan in Schopfheim', type: 'text' },
				{
					text: ", Germany, Busch Vacuum Solutions has grown into one of the world's largest manufacturers of vacuum pumps, systems, and components. ",
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'With over 8,000 employees and 110 subsidiaries worldwide, the company provides innovative vacuum solutions for applications in packaging, chemical processing, pharmaceuticals, and more.',
					type: 'text'
				}
			]
		},
		{ type: 'paragraph', children: [{ text: '', type: 'text' }] },
		{ type: 'paragraph', children: [{ text: '', type: 'text' }] },
		{ type: 'paragraph', children: [{ text: '', type: 'text' }] },
		{ type: 'paragraph', children: [{ text: '', type: 'text' }] }
	];
</script>

<h1>Blocks Renderer Demo</h1>
<p>Testing the Svelte 5 port of the React blocks renderer</p>

<div class="demo">
	<BlocksRenderer {content} />
</div>
