export interface StrapiPage {
  id: number;

  data: {
    attributes: any;
  }

}
export interface Highlights {
  data: RichText[];
}

export interface Skills {
  data: Skill[];
}

export interface Skill {
  id: number;
  attributes: {
    skill: string;
    years: string;
    level: string
  }
}

export interface WorkExperiences {
  data: WorkExperience[];
}


export interface Achievements {
  data: Achievement[];
}
export interface Achievement {
  id: number;
  attributes: {
    organization: string;
    year: string;
    title: string;

  }

}
export interface WorkExperience {
  id: number;
  attributes: {
    companyName: string;
    jobTitle: string;
    location: string;
    contractPosition: boolean;
    startDate: string;
    endDate: string;
    accomplishments: RichTextList[];
  }
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

export interface RichTextParagraph {
  type: 'paragraph';
  children: RichTextListItemChild[];
}

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



