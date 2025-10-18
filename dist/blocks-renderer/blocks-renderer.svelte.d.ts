export declare const getRenderCTX: () => {
    blocks: Record<string, any>;
    addMissingBlockType: (type: string) => void;
}, setRenderCTX: (context: {
    blocks: Record<string, any>;
    addMissingBlockType: (type: string) => void;
}) => {
    blocks: Record<string, any>;
    addMissingBlockType: (type: string) => void;
};
import type { RootNode, Node, Modifier } from './types.js';
interface Props {
    content: RootNode[];
    blocks?: Partial<Record<Node['type'], any>>;
    modifiers?: Partial<Record<Modifier, any>>;
}
declare const BlocksRenderer: import("svelte").Component<Props, {}, "">;
type BlocksRenderer = ReturnType<typeof BlocksRenderer>;
export default BlocksRenderer;
