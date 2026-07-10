export interface BibleTranslation {
  id: string;
  name: string;
  abbreviation: string;
  language: string;
  publicDomain: boolean;
}

export const translations: Record<string, BibleTranslation> = {
  web: {
    id: "web",
    name: "World English Bible",
    abbreviation: "WEB",
    language: "English",
    publicDomain: true,
  },
};

export const defaultTranslation = "web";