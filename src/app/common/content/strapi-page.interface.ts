export interface StrapiPage {
  id: number;

  data: {
    attributes: any;
  }

}
export interface Highlights {
  data: RichText[];
}

export interface RichText {
  id: number;
  attributes: {
    title: string;
    items: RichTextItem[];
  };
}

// Discriminated Union for RichTextItem
export type RichTextItem =
  | RichTextList
  | RichTextParagraph
;

export interface RichTextList {
  type: 'list';
  format: string;
  children: RichTextListItem[];
}

export interface RichTextListItem {
  type: 'listItem';
  children: RichTextListItemChild[];
}

export interface RichTextListItemChild {
  type: string;
  text: string;
}

export interface RichTextParagraph {
  type: 'paragraph';
  text: string;
}

