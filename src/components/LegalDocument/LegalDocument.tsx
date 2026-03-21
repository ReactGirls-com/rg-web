import type { LegalSection } from '@/src/utils/legalDocumentTypes';
import { LegalDocumentSection } from './LegalDocumentSection';
import style from './LegalDocument.module.scss';

type LegalDocumentProps = {
  pageTitle: string;
  sections: LegalSection[];
  privacyHref?: string;
};

export const LegalDocument: React.FC<LegalDocumentProps> = ({
  pageTitle,
  sections,
  privacyHref,
}) => (
  <div className={style.wrapper}>
    <h1 className={style.title}>{pageTitle}</h1>
    <article className={style.article}>
      {sections.map((section, sectionIndex) => (
        <LegalDocumentSection
          key={`${section.title}-${sectionIndex}`}
          section={section}
          privacyHref={privacyHref}
        />
      ))}
    </article>
  </div>
);
