<script lang="ts">
	import { BlocksRenderer, type BlocksContent } from '$lib';

	// Sample content to test the blocks renderer
	let content = $state<BlocksContent>([
		{
			type: 'heading',
			level: 1,
			children: [
				{
					bold: true,
					text: 'The Future of Web Development',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'Modern web development has evolved dramatically over the past decade. With the introduction of ',
					type: 'text'
				},
				{
					italic: true,
					text: 'reactive frameworks',
					type: 'text'
				},
				{
					text: ' and ',
					type: 'text'
				},
				{
					bold: true,
					text: 'component-based architecture',
					type: 'text'
				},
				{
					text: ', developers can now build complex applications with unprecedented ease.',
					type: 'text'
				}
			]
		},
		{
			type: 'heading',
			level: 2,
			children: [
				{
					text: 'Key Technologies to Watch',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'The landscape is constantly shifting, but these technologies are making waves:',
					type: 'text'
				}
			]
		},
		{
			type: 'list',
			format: 'unordered',
			children: [
				{
					type: 'list-item',
					children: [
						{
							bold: true,
							text: 'Svelte 5:',
							type: 'text'
						},
						{
							text: ' A revolutionary approach to reactivity with runes',
							type: 'text'
						}
					]
				},
				{
					type: 'list-item',
					children: [
						{
							bold: true,
							text: 'Tailwind v4:',
							type: 'text'
						},
						{
							text: ' Next-generation utility-first CSS framework',
							type: 'text'
						}
					]
				},
				{
					type: 'list-item',
					children: [
						{
							bold: true,
							text: 'TypeScript:',
							type: 'text'
						},
						{
							text: ' Type safety that scales',
							type: 'text'
						}
					]
				}
			]
		},
		{
			type: 'heading',
			level: 3,
			children: [
				{
					text: 'Code Example',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: "Here's how you might define a reactive state in Svelte 5 using ",
					type: 'text'
				},
				{
					code: true,
					text: '$state',
					type: 'text'
				},
				{
					text: ' rune:',
					type: 'text'
				}
			]
		},
		{
			type: 'code',
			children: [
				{
					text: 'let count = $state(0);\nlet doubled = $derived(count * 2);',
					type: 'text'
				}
			]
		},
		{
			type: 'heading',
			level: 2,
			children: [
				{
					text: 'Best Practices',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'When building modern web applications, consider these essential practices:',
					type: 'text'
				}
			]
		},
		{
			type: 'list',
			format: 'ordered',
			children: [
				{
					type: 'list-item',
					children: [
						{
							strikethrough: true,
							text: 'Write inline styles',
							type: 'text'
						},
						{
							text: ' - Use utility classes instead',
							type: 'text'
						}
					]
				},
				{
					type: 'list-item',
					children: [
						{
							text: 'Embrace ',
							type: 'text'
						},
						{
							underline: true,
							text: 'component composition',
							type: 'text'
						},
						{
							text: ' over inheritance',
							type: 'text'
						}
					]
				},
				{
					type: 'list-item',
					children: [
						{
							text: 'Keep your components focused and reusable',
							type: 'text'
						}
					]
				}
			]
		},
		{
			type: 'quote',
			children: [
				{
					text: 'The best code is no code at all. Every line of code you write is a liability.',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'For more information about modern web development practices, check out ',
					type: 'text'
				},
				{
					url: 'https://svelte.dev',
					type: 'link',
					children: [
						{
							text: "Svelte's official documentation",
							type: 'text'
						}
					]
				},
				{
					text: ' and ',
					type: 'text'
				},
				{
					url: 'https://tailwindcss.com',
					type: 'link',
					children: [
						{
							text: 'Tailwind CSS',
							type: 'text'
						}
					]
				},
				{
					text: '.',
					type: 'text'
				}
			]
		},
		{
			type: 'heading',
			level: 2,
			children: [
				{
					text: 'Images and Media',
					type: 'text'
				}
			]
		},
		{
			type: 'image',
			image: {
				name: 'placeholder.jpg',
				alternativeText: 'Random placeholder image',
				url: 'https://picsum.photos/800/400',
				width: 800,
				height: 400,
				hash: 'placeholder_hash',
				ext: '.jpg',
				mime: 'image/jpeg',
				size: 50.5,
				provider: 'picsum',
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			},
			children: [
				{
					text: '',
					type: 'text'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'Visual content plays a crucial role in modern web experiences. Always ensure your images are ',
					type: 'text'
				},
				{
					bold: true,
					italic: true,
					text: 'optimized',
					type: 'text'
				},
				{
					text: ' and accessible.',
					type: 'text'
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
