import { CustomLink } from '@/src/components/CustomLink';
import type { LegalParagraph } from '@/src/utils/legalDocumentTypes';
import style from './LegalDocumentParagraph.module.scss';

type LegalDocumentParagraphProps = {
  paragraph: LegalParagraph;
  privacyHref?: string;
};

export const LegalDocumentParagraph: React.FC<LegalDocumentParagraphProps> = ({
  paragraph,
  privacyHref,
}) => {
  if (typeof paragraph === 'string') {
    return <p className={style.paragraph}>{paragraph}</p>;
  }

  if (!privacyHref) {
    return null;
  }

  return (
    <p className={style.paragraph}>
      {paragraph.before}
      <CustomLink href={privacyHref} className={style.inlineLink}>
        {paragraph.linkText}
      </CustomLink>
      {paragraph.after}
    </p>
  );
};
