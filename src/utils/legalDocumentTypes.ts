export type LegalPrivacyLinkParagraph = {
  kind: 'privacyLink';
  before: string;
  linkText: string;
  after: string;
};

export type LegalParagraph = string | LegalPrivacyLinkParagraph;

export type LegalSection = {
  title: string;
  paragraphs?: LegalParagraph[];
  listItems?: string[];
  listAfterParagraphs?: LegalParagraph[];
  secondaryListItems?: string[];
  secondaryAfterParagraphs?: LegalParagraph[];
};

export type LegalPageLocaleContent = {
  metaTitle: string;
  metaDescription: string;
  pageTitle: string;
  sections: LegalSection[];
};
