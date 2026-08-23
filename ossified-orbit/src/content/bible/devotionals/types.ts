export interface Devotional {
  /** Stable place in the single master devotional collection (1–365). */
  day: number;
  slug: string;
  title: string;
  theme: string;
  /** Canonical movement that gives the master journey its theological structure. */
  movement: string;
  /** Optional publication date retained for the existing day-detail presentation. */
  date?: string;
  /** Optional quotation; the canonical manuscript may provide a reference only. */
  scripture?: string;
  scriptureReference: string;
  /** Exact Bible Hub book slug used by /bible/{book}/{chapter}. */
  book: string;
  chapter: number;
  /** Supporting passages, displayed separately from the one primary Bible route. */
  secondaryScriptureReferences?: string[];
  reflection: string;
  declaration: string;
  prayer: string;
}

export interface DevotionalJourney {
  id: "90-day" | "180-day" | "365-day";
  title: string;
  duration: number;
  description: string;
  /** Explicit canonical day selections for derivative journeys; never first-N days. */
  dayNumbers?: number[];
}
