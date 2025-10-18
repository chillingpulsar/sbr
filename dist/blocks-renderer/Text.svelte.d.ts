interface Props {
	text: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
	code?: boolean;
}
declare const Text: import('svelte').Component<Props, {}, ''>;
type Text = ReturnType<typeof Text>;
export default Text;
