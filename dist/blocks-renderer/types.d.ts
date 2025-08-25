export interface TextInlineNode {
    type: 'text';
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
}
export interface LinkInlineNode {
    type: 'link';
    url: string;
    children: TextInlineNode[];
}
export interface ListItemInlineNode {
    type: 'list-item';
    children: DefaultInlineNode[];
}
export type DefaultInlineNode = TextInlineNode | LinkInlineNode;
export type NonTextInlineNode = Exclude<DefaultInlineNode, TextInlineNode> | ListItemInlineNode;
export interface ParagraphBlockNode {
    type: 'paragraph';
    children: DefaultInlineNode[];
}
export interface QuoteBlockNode {
    type: 'quote';
    children: DefaultInlineNode[];
}
export interface CodeBlockNode {
    type: 'code';
    children: DefaultInlineNode[];
}
export interface HeadingBlockNode {
    type: 'heading';
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: DefaultInlineNode[];
}
export interface ListBlockNode {
    type: 'list';
    format: 'ordered' | 'unordered';
    children: (ListItemInlineNode | ListBlockNode)[];
}
export interface ImageBlockNode {
    type: 'image';
    image: {
        name: string;
        alternativeText?: string | null;
        url: string;
        caption?: string | null;
        width: number;
        height: number;
        formats?: Record<string, unknown>;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        previewUrl?: string | null;
        provider: string;
        provider_metadata?: unknown | null;
        createdAt: string;
        updatedAt: string;
    };
    children: [{
        type: 'text';
        text: '';
    }];
}
export type RootNode = ParagraphBlockNode | QuoteBlockNode | CodeBlockNode | HeadingBlockNode | ListBlockNode | ImageBlockNode;
export type Node = RootNode | NonTextInlineNode;
export type Modifier = Exclude<keyof TextInlineNode, 'type' | 'text'>;
export type BlocksContent = RootNode[];
export interface BlockComponentProps {
    children?: unknown;
    plainText?: string;
    [key: string]: unknown;
}
export interface ModifierComponentProps {
    children: unknown;
}
