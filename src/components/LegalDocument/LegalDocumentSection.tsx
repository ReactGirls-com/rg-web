import type { LegalSection } from '@/src/utils/legalDocumentTypes';
import { LegalDocumentBulletList } from './LegalDocumentBulletList';
import { LegalDocumentParagraphs } from './LegalDocumentParagraphs';
import style from './LegalDocumentSection.module.scss';

type LegalDocumentSectionProps = {
  section: LegalSection;
  privacyHref?: string;
};

export const LegalDocumentSection: React.FC<LegalDocumentSectionProps> = ({
  section,
  privacyHref,
}) => (
  <section className={style.section}>
    <h2 className={style.sectionTitle}>{section.title}</h2>
    <LegalDocumentParagraphs
      paragraphs={section.paragraphs}
      privacyHref={privacyHref}
      keyPrefix={`${section.title}-p`}
    />
    <LegalDocumentBulletList
      items={section.listItems}
      keyPrefix={`${section.title}-ul`}
    />
    <LegalDocumentParagraphs
      paragraphs={section.listAfterParagraphs}
      privacyHref={privacyHref}
      keyPrefix={`${section.title}-after`}
    />
    <LegalDocumentBulletList
      items={section.secondaryListItems}
      keyPrefix={`${section.title}-ul2`}
    />
    <LegalDocumentParagraphs
      paragraphs={section.secondaryAfterParagraphs}
      privacyHref={privacyHref}
      keyPrefix={`${section.title}-after2`}
    />
  </section>
);
