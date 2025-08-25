import type { RootNode, Node, Modifier } from './types.js';
interface Props {
    content: RootNode[];
    blocks?: Partial<Record<Node['type'], any>>;
    modifiers?: Partial<Record<Modifier, any>>;
}
declare const BlocksRenderer: import("svelte").Component<Props, {}, "">;
type BlocksRenderer = ReturnType<typeof BlocksRenderer>;
export default BlocksRenderer;
