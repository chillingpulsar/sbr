export default Image;
type Image = {
	$on?(type: string, callback: (e: any) => void): () => void;
	$set?(props: $$ComponentProps): void;
};
declare const Image: import('svelte').Component<$$ComponentProps, {}, ''>;
