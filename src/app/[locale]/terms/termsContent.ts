import type { Locale } from '@/src/constants/translations';
import type { LegalPageLocaleContent } from '@/src/utils/legalDocumentTypes';

export const termsContentByLocale: Record<Locale, LegalPageLocaleContent> = {
  cs: {
    metaTitle: 'Obecné podmínky | ReactGirls',
    metaDescription:
      'Obecné podmínky účasti na kurzech, workshopech a dalších vzdělávacích akcích pořádaných organizací ReactGirls z.s.',
    pageTitle: 'Obecné podmínky',
    sections: [
      {
        title: '1. Obecná ustanovení',
        paragraphs: [
          'Tyto podmínky upravují účast na kurzech, workshopech a dalších vzdělávacích akcích pořádaných organizací ReactGirls z.s., se sídlem:',
          'V jehličí 2106/2, Krč\n142 00 Praha 4\nČeská republika\nIČO: 09587535\n(dále jen „organizace“).',
          'Registrací na kurz nebo akci účastník potvrzuje, že se s těmito podmínkami seznámil a souhlasí s nimi.',
        ],
      },
      {
        title: '2. Registrace',
        paragraphs: [
          'Registrace na kurzy nebo akce probíhá prostřednictvím registračního formuláře, e-mailu nebo jiným způsobem uvedeným organizací.',
          'Registrace je platná po jejím potvrzení organizací. Organizace si vyhrazuje právo omezit počet účastníků podle kapacity nebo z organizačních důvodů.',
        ],
      },
      {
        title: '3. Pravidla účasti',
        paragraphs: [
          'Účastníci jsou povinni chovat se ohleduplně k ostatním účastníkům, lektorům a partnerům akce.',
          'Organizace si vyhrazuje právo vyloučit účastníka z akce v případě nevhodného nebo rušivého chování.',
        ],
      },
      {
        title: '4. Změna nebo zrušení akce',
        paragraphs: [
          'Organizace si vyhrazuje právo změnit termín, program nebo akci zrušit, například z organizačních důvodů nebo při nedostatečném počtu účastníků.',
          'O případných změnách budou účastníci informováni.',
        ],
      },
      {
        title: '5. Autorská práva',
        paragraphs: [
          'Veškeré studijní materiály, prezentace a další obsah poskytnutý během kurzu jsou chráněny autorským právem.',
          'Materiály jsou určeny pouze pro osobní studium účastníků a nesmí být bez souhlasu organizace dále šířeny ani komerčně využívány.',
        ],
      },
      {
        title: '6. Ochrana osobních údajů',
        paragraphs: [
          'Osobní údaje poskytnuté při registraci jsou zpracovávány pouze za účelem organizace kurzů a komunikace s účastníky.',
          {
            kind: 'privacyLink',
            before:
              'Zpracování osobních údajů probíhá v souladu s platnými právními předpisy, zejména Nařízením EU 2016/679 (GDPR). Podrobnosti jsou uvedeny v dokumentu ',
            linkText: 'Zásady zpracování osobních údajů',
            after: '',
          },
        ],
      },
      {
        title: '7. Fotografování a média',
        paragraphs: [
          'Během akcí může organizace pořizovat fotografie nebo videozáznamy pro dokumentační a propagační účely.',
          'Tyto materiály mohou být zveřejněny na webových stránkách nebo sociálních sítích organizace.',
        ],
      },
      {
        title: '8. Závěrečná ustanovení',
        paragraphs: [
          'Tyto podmínky se řídí právním řádem České republiky.',
          'Organizace si vyhrazuje právo tyto podmínky kdykoli upravit. Aktuální verze bude vždy zveřejněna na webových stránkách organizace.',
        ],
      },
    ],
  },
  en: {
    metaTitle: 'Terms and Conditions | ReactGirls',
    metaDescription:
      'Terms and Conditions for participation in courses, workshops, and other educational events organized by ReactGirls z.s.',
    pageTitle: 'Terms and Conditions',
    sections: [
      {
        title: '1. General Provisions',
        paragraphs: [
          'These Terms and Conditions govern participation in courses, workshops, and other educational events organized by ReactGirls z.s., with its registered office at:',
          'V jehličí 2106/2, Krč\n142 00 Prague 4\nCzech Republic\nCompany ID (IČO): 09587535\n(hereinafter referred to as the “Organization”).',
          'By registering for a course or event, the participant confirms that they have read and agree to these Terms and Conditions.',
        ],
      },
      {
        title: '2. Registration',
        paragraphs: [
          'Registration for courses or events is carried out via a registration form, email, or other methods specified by the Organization.',
          'Registration becomes valid once it is confirmed by the Organization. The Organization reserves the right to limit the number of participants based on capacity or for organizational reasons.',
        ],
      },
      {
        title: '3. Participation Rules',
        paragraphs: [
          'Participants are expected to behave respectfully toward other participants, instructors, and event partners.',
          'The Organization reserves the right to remove a participant from an event in case of inappropriate or disruptive behavior.',
        ],
      },
      {
        title: '4. Changes or Cancellation of Events',
        paragraphs: [
          'The Organization reserves the right to change the date, program, or cancel an event, for example due to organizational reasons or an insufficient number of participants.',
          'Participants will be informed about any changes.',
        ],
      },
      {
        title: '5. Intellectual Property',
        paragraphs: [
          'All educational materials, presentations, and other content provided during the course are protected by copyright.',
          'These materials are intended solely for the personal study of participants and may not be distributed or used for commercial purposes without the Organization’s consent.',
        ],
      },
      {
        title: '6. Personal Data Protection',
        paragraphs: [
          'Personal data provided during registration is processed solely for the purpose of organizing courses and communicating with participants.',
          {
            kind: 'privacyLink',
            before:
              'Personal data is processed in accordance with applicable legal regulations, in particular Regulation (EU) 2016/679 (GDPR). Further details are provided in the ',
            linkText: 'Privacy Policy',
            after: ' document.',
          },
        ],
      },
      {
        title: '7. Photography and Media',
        paragraphs: [
          'During events, the Organization may take photographs or video recordings for documentation and promotional purposes.',
          'These materials may be published on the Organization’s website or social media channels.',
        ],
      },
      {
        title: '8. Final Provisions',
        paragraphs: [
          'These Terms and Conditions are governed by the laws of the Czech Republic.',
          'The Organization reserves the right to modify these Terms and Conditions at any time. The current version will always be available on the Organization’s website.',
        ],
      },
    ],
  },
};
