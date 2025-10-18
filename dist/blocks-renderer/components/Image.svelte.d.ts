import type { ImageBlockNode } from '../types.js';
interface Props {
	image: ImageBlockNode['image'];
}
declare const Image: import('svelte').Component<Props, {}, ''>;
type Image = ReturnType<typeof Image>;
export default Image;
