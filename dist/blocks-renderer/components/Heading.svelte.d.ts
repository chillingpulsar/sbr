import type { Snippet } from 'svelte';
interface Props {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: Snippet;
}
declare const Heading: import("svelte").Component<Props, {}, "">;
type Heading = ReturnType<typeof Heading>;
export default Heading;
