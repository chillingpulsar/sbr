<script lang="ts">
	interface Props {
		plainText?: string;
	}

	let { plainText }: Props = $props();
</script>

<pre><code>{plainText}</code></pre>
