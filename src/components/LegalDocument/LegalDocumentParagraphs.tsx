import type { LegalParagraph } from '@/src/utils/legalDocumentTypes';
import { LegalDocumentParagraph } from './LegalDocumentParagraph';

type LegalDocumentParagraphsProps = {
  paragraphs?: LegalParagraph[];
  privacyHref?: string;
  keyPrefix: string;
};

export const LegalDocumentParagraphs: React.FC<
  LegalDocumentParagraphsProps
> = ({ paragraphs, privacyHref, keyPrefix }) => {
  if (!paragraphs?.length) {
    return null;
  }

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <LegalDocumentParagraph
          key={`${keyPrefix}-${index}`}
          paragraph={paragraph}
          privacyHref={privacyHref}
        />
      ))}
    </>
  );
};
