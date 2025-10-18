<script lang="ts">
	import Textarea from '$lib/components/internals/textarea/textarea.svelte';
	import * as Card from '$lib/components/internals/card';
	import Button from '$lib/components/internals/button/button.svelte';
	import { BlocksRenderer, type BlocksContent } from '$lib';

	// Sample content to test the blocks renderer
	const sampleContent: BlocksContent = [
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
	];

	let jsonInput = $state(JSON.stringify(sampleContent, null, 2));
	let content = $state<BlocksContent>(sampleContent);
	let error = $state<string | null>(null);

	function updatePreview() {
		try {
			const parsed = JSON.parse(jsonInput);
			content = parsed;
			error = null;
		} catch (e) {
			error = e instanceof Error ? e.message : 'Invalid JSON';
		}
	}

	function loadSample() {
		jsonInput = JSON.stringify(sampleContent, null, 2);
		updatePreview();
	}

	function clearContent() {
		jsonInput = '[]';
		content = [];
		error = null;
	}
</script>

<div class="flex flex-col gap-10">
	<!-- Usage Info -->
	<Card.Root class="mt-6">
		<Card.Header>
			<Card.Title>Quick Start Guide</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
				<div>
					<h3 class="mb-2 font-semibold text-slate-900 dark:text-slate-100">1. Edit JSON</h3>
					<p class="text-slate-600 dark:text-slate-400">
						Modify the JSON in the editor panel to create your content structure
					</p>
				</div>
				<div>
					<h3 class="mb-2 font-semibold text-slate-900 dark:text-slate-100">2. Update Preview</h3>
					<p class="text-slate-600 dark:text-slate-400">
						Click "Update Preview" to see your changes rendered in real-time
					</p>
				</div>
				<div>
					<h3 class="mb-2 font-semibold text-slate-900 dark:text-slate-100">3. Test & Iterate</h3>
					<p class="text-slate-600 dark:text-slate-400">
						Experiment with different block types and formatting options
					</p>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
		<!-- Editor Panel -->
		<Card.Root class="flex h-[calc(100vh-12rem)] flex-col">
			<Card.Header>
				<div class="flex flex-col gap-2">
					<div>
						<Card.Title>JSON Editor</Card.Title>
						<Card.Description>Edit your BlocksContent JSON</Card.Description>
					</div>
					<div class="flex flex-wrap items-center gap-2">
						<Button variant="outline" size="sm" onclick={loadSample}>Load Sample</Button>
						<Button variant="outline" size="sm" onclick={clearContent}>Clear</Button>
						<Button size="sm" onclick={updatePreview}>Update Preview</Button>
					</div>
				</div>
			</Card.Header>
			<Card.Content class="flex-1 overflow-hidden">
				<Textarea
					bind:value={jsonInput}
					placeholder="Paste your BlocksContent JSON here..."
					class="h-full resize-none font-mono text-sm"
				/>
				{#if error}
					<div
						class="mt-2 rounded-md border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950/30"
					>
						<p class="text-sm font-medium text-red-600 dark:text-red-400">Error:</p>
						<p class="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>
					</div>
				{/if}
			</Card.Content>
		</Card.Root>

		<!-- Preview Panel -->
		<Card.Root class="flex h-[calc(100vh-12rem)] flex-col">
			<Card.Header>
				<Card.Title>Live Preview</Card.Title>
				<Card.Description>See your content rendered in real-time</Card.Description>
			</Card.Header>
			<Card.Content class="flex-1 overflow-auto">
				<div class="prose prose-slate dark:prose-invert max-w-none">
					{#if content && content.length > 0}
						<div class="sbr-renderer">
							<BlocksRenderer {content} />
						</div>
					{:else}
						<div class="flex h-full items-center justify-center text-slate-400">
							<p>No content to preview. Add some JSON to get started.</p>
						</div>
					{/if}
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>
