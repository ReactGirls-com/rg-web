import type { Locale } from '@/src/constants/translations';
import type { LegalPageLocaleContent } from '@/src/utils/legalDocumentTypes';

export const privacyContentByLocale: Record<Locale, LegalPageLocaleContent> = {
  cs: {
    metaTitle: 'Zásady zpracování osobních údajů | ReactGirls',
    metaDescription: 'Zásady zpracování osobních údajů — ReactGirls z.s.',
    pageTitle: 'Zásady zpracování osobních údajů',
    sections: [
      {
        title: '1. Správce osobních údajů',
        paragraphs: [
          'Správcem osobních údajů je:',
          'ReactGirls z.s.\nV jehličí 2106/2, Krč\n142 00 Praha 4\nČeská republika\nIČO: 09587535\n(dále jen „správce“ nebo „organizace“)',
          'Správce zpracovává osobní údaje účastníků kurzů, workshopů, eventů a dalších vzdělávacích aktivit.',
        ],
      },
      {
        title: '2. Jaké osobní údaje zpracováváme',
        paragraphs: [
          'V souvislosti s registrací na kurz nebo vzdělávací akci můžeme zpracovávat zejména tyto údaje:',
        ],
        listItems: [
          'jméno a příjmení',
          'e-mailová adresa',
          'telefonní číslo',
          'fakturační údaje (např. fakturační adresa, IČO)',
          'případně další údaje potřebné pro organizaci konkrétní akce',
        ],
      },
      {
        title: '3. Účely zpracování osobních údajů',
        paragraphs: ['Osobní údaje zpracováváme zejména za účelem:'],
        listItems: [
          'Organizace kurzů a eventů,',
          'registrace účastníků,',
          'komunikace s účastníky,',
          'zajištění přístupu na akci,',
          'administrace účasti.',
        ],
        listAfterParagraphs: [
          'Právní základ: plnění smlouvy podle čl. 6 odst. 1 písm. b) GDPR',
          'Plnění právních povinností\nnapříklad: účetní a daňová evidence, vystavování faktur',
          'Právní základ: plnění právní povinnosti podle čl. 6 odst. 1 písm. c) GDPR',
          'Marketing a prezentace organizace\nnapříklad: zveřejňování fotografií z kurzů, informování o dalších akcích',
          'Právní základ: souhlas subjektu údajů (čl. 6 odst. 1 písm. a GDPR)\npřípadně oprávněný zájem organizace (čl. 6 odst. 1 písm. f GDPR)',
        ],
      },
      {
        title: '4. Předávání osobních údajů třetím stranám',
        paragraphs: [
          'Osobní údaje mohou být v nezbytném rozsahu předány partnerům organizace, například:',
        ],
        listItems: [
          'společnostem poskytujícím prostory pro pořádání kurzů,',
          'poskytovatelům technických služeb (např. software používaný během kurzu),\nposkytovatelům IT infrastruktury,',
          'fotografům dokumentujícím průběh akce',
        ],
        listAfterParagraphs: ['Například může být partnerovi předáno:'],
        secondaryListItems: [
          'jméno účastníka pro účely vstupu do budovy,',
          'e-mailová adresa pro přístup k softwaru nebo síti',
        ],
        secondaryAfterParagraphs: [
          'Osobní údaje jsou předávány pouze v nezbytném rozsahu a pouze po dobu nezbytnou pro daný účel.',
        ],
      },
      {
        title: '5. Fotografování a audiovizuální záznam',
        paragraphs: [
          'Během kurzů nebo eventů může organizace pořizovat fotografie nebo videozáznamy pro účely dokumentace a propagace aktivit organizace.',
          'Tyto materiály mohou být zveřejněny například:',
        ],
        listItems: [
          'na webových stránkách organizace',
          'na sociálních sítích organizace',
          'na sociálních sítích partnerů',
        ],
        listAfterParagraphs: [
          'Zpracování fotografií probíhá v souladu s:\n§ 80 a násl. zákona č. 89/2012 Sb., občanský zákoník\nNařízením EU 2016/679 (GDPR)',
          'Pokud je zpracování založeno na souhlasu, může být tento souhlas kdykoli odvolán.',
        ],
      },
      {
        title: '6. Doba uchování osobních údajů',
        paragraphs: [
          'Osobní údaje uchováváme pouze po dobu nezbytně nutnou pro daný účel.',
          'Typicky:',
        ],
        listItems: [
          'údaje o účasti na kurzech – po dobu trvání organizace kurzu',
          'účetní doklady – dle zákonných povinností (obvykle 10 let)',
          'marketingové souhlasy – do odvolání souhlasu',
        ],
        listAfterParagraphs: [
          'Po uplynutí této doby jsou osobní údaje bezpečně vymazány nebo anonymizovány.',
        ],
      },
      {
        title: '7. Zabezpečení osobních údajů',
        paragraphs: [
          'Organizace přijala vhodná technická a organizační opatření k zabezpečení osobních údajů proti:',
        ],
        listItems: [
          'neoprávněnému přístupu',
          'ztrátě',
          'zneužití',
          'neoprávněné změně',
        ],
        listAfterParagraphs: [
          'Zpracování osobních údajů probíhá v souladu s:\nNařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR)\nsouvisejícími právními předpisy České republiky.',
        ],
      },
      {
        title: '8. Práva subjektů údajů',
        paragraphs: [
          'V souvislosti se zpracováním osobních údajů máte následující práva:',
        ],
        listItems: [
          'právo na přístup ke svým osobním údajům',
          'právo na opravu nepřesných údajů',
          'právo na výmaz osobních údajů („právo být zapomenut“)',
          'právo na omezení zpracování',
          'právo vznést námitku proti zpracování',
          'právo na přenositelnost údajů',
          'právo kdykoli odvolat udělený souhlas se zpracováním',
        ],
      },
      {
        title: '9. Kontakt',
        paragraphs: [
          'V případě dotazů ohledně zpracování osobních údajů nás můžete kontaktovat na\nreactgirlsprague@gmail.com',
        ],
      },
      {
        title: '10. Návštěvnost webu',
        paragraphs: [
          'Pro měření návštěvnosti těchto webových stránek používáme službu Simple Analytics (provozovatel Simple Analytics B.V., Nizozemsko). Jedná se o nástroj s důrazem na ochranu soukromí, který nevyužívá cookies pro analytické účely v běžném slova smyslu a neumožňuje identifikaci jednotlivých návštěvníků. Zpracováváme pouze agregované statistiky o návštěvnosti. Více informací: https://simpleanalytics.com/privacy',
        ],
      },
    ],
  },
  en: {
    metaTitle: 'Privacy Policy | ReactGirls',
    metaDescription: 'Privacy Policy — ReactGirls z.s.',
    pageTitle: 'Privacy Policy',
    sections: [
      {
        title: '1. Data Controller',
        paragraphs: [
          'The data controller is:',
          'ReactGirls z.s.\nV jehličí 2106/2, Krč\n142 00 Prague 4\nCzech Republic\nCompany ID (IČO): 09587535\n(hereinafter referred to as the “controller” or the “organization”)',
          'The controller processes personal data of participants of courses, workshops, events, and other educational activities.',
        ],
      },
      {
        title: '2. What Personal Data We Process',
        paragraphs: [
          'In connection with registration for a course or educational event, we may process the following personal data:',
        ],
        listItems: [
          'first name and last name',
          'email address',
          'phone number',
          'billing information (e.g., billing address, company ID number)',
          'any additional information necessary for organizing a specific event',
        ],
        listAfterParagraphs: [
          'You provide this information voluntarily during registration or when communicating with the organization.',
        ],
      },
      {
        title: '3. Purpose of Personal Data Processing',
        paragraphs: [
          'We process personal data primarily for the following purposes:',
        ],
        listItems: [
          'Organization of courses and events',
          'participant registration',
          'communication with participants',
          'providing access to the event',
          'administration of participation',
        ],
        listAfterParagraphs: [
          'Legal basis:\nperformance of a contract pursuant to Article 6(1)(b) GDPR',
          'Compliance with legal obligations\nFor example:\naccounting and tax records, issuing invoices',
          'Legal basis:\ncompliance with a legal obligation pursuant to Article 6(1)(c) GDPR',
          'Marketing and promotion of the organization\nFor example:\n● publishing photographs from courses\n● informing participants about future events',
          'Legal basis:\nconsent of the data subject (Article 6(1)(a) GDPR)\nor legitimate interest of the organization (Article 6(1)(f) GDPR)',
        ],
      },
      {
        title: '4. Sharing Personal Data with Third Parties',
        paragraphs: [
          'Personal data may be shared, to the necessary extent, with partners of the organization, such as:',
        ],
        listItems: [
          'companies providing venues for courses',
          'providers of technical services (e.g., software used during the course)',
          'IT infrastructure providers',
          'photographers documenting the event',
        ],
        listAfterParagraphs: [
          'For example, the following data may be shared with partners:',
        ],
        secondaryListItems: [
          'participant name for building access purposes',
          'email address for access to software or networks',
        ],
        secondaryAfterParagraphs: [
          'Personal data is shared only to the extent necessary and only for the period required for the specific purpose.',
        ],
      },
      {
        title: '5. Photography and Audiovisual Recordings',
        paragraphs: [
          'During courses or events, the organization may take photographs or video recordings for the purposes of documentation and promotion of the organization’s activities.',
        ],
        listItems: [
          'These materials may be published, for example:',
          'on the organization’s website',
          'on the organization’s social media channels',
          'on the social media channels of partners',
        ],
        listAfterParagraphs: [
          'Processing of photographs is carried out in accordance with:\nSection 80 et seq. of Act No. 89/2012 Coll., the Civil Code\nRegulation (EU) 2016/679 (GDPR)',
          'Where processing is based on consent, such consent may be withdrawn at any time.',
        ],
      },
      {
        title: '6. Data Retention Period',
        paragraphs: [
          'We retain personal data only for as long as necessary for the given purpose.',
          'Typically:',
        ],
        listItems: [
          'course participation data – for the duration of the course organization',
          'accounting records – according to legal obligations (usually 10 years)',
          'marketing consent – until the consent is withdrawn',
        ],
        listAfterParagraphs: [
          'After this period, personal data is securely deleted or anonymized.',
        ],
      },
      {
        title: '7. Security of Personal Data',
        paragraphs: [
          'The organization has implemented appropriate technical and organizational measures to protect personal data against:',
        ],
        listItems: [
          'unauthorized access',
          'loss',
          'misuse',
          'unauthorized alteration',
        ],
        listAfterParagraphs: [
          'Personal data is processed in accordance with:\nRegulation (EU) 2016/679 of the European Parliament and of the Council (GDPR)\napplicable legal regulations of the Czech Republic.',
        ],
      },
      {
        title: '8. Data Subject Rights',
        paragraphs: [
          'In connection with the processing of personal data, you have the following rights:',
        ],
        listItems: [
          'the right to access your personal data',
          'the right to rectification of inaccurate data',
          'the right to erasure of personal data (“right to be forgotten”)',
          'the right to restriction of processing',
          'the right to object to processing',
          'the right to data portability',
          'the right to withdraw consent to processing at any time',
        ],
      },
      {
        title: '9. Contact',
        paragraphs: [
          'If you have any questions regarding the processing of personal data, you can contact us at:\nreactgirlsprague@gmail.com.',
        ],
      },
      {
        title: '10. Website analytics',
        paragraphs: [
          'We use Simple Analytics (operated by Simple Analytics B.V., Netherlands) to measure traffic to this website. It is a privacy-oriented analytics tool that does not use cookies for analytics in the usual sense and does not identify individual visitors. We only process aggregate traffic statistics. For more information, see the provider’s privacy policy: https://simpleanalytics.com/privacy',
        ],
      },
    ],
  },
};
