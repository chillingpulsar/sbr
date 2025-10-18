import type { Snippet } from 'svelte';
interface Props {
	children: Snippet;
}
declare const ListItem: import('svelte').Component<Props, {}, ''>;
type ListItem = ReturnType<typeof ListItem>;
export default ListItem;
