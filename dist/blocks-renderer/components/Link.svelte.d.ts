import type { Snippet } from 'svelte';
interface Props {
    url: string;
    children: Snippet;
}
declare const Link: import("svelte").Component<Props, {}, "">;
type Link = ReturnType<typeof Link>;
export default Link;
