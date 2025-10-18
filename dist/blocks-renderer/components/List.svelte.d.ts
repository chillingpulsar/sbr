import type { Snippet } from 'svelte';
interface Props {
	format: 'ordered' | 'unordered';
	children: Snippet;
}
declare const List: import('svelte').Component<Props, {}, ''>;
type List = ReturnType<typeof List>;
export default List;
