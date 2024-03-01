export interface SponsorInterface {
  name: string;
  image: string;
  url: string;
}

export enum sponsorType {
  Main = 'main',
  Gold = 'gold',
  Silver = 'silver',
  Bronze = 'bronze',
  Diversity = 'diversity',
  Technical = 'technical',
  Community = 'community',
  PastEdition = 'pastEdition',
}

export type Sponsors = {
  Main?: SponsorInterface[];
  Gold?: SponsorInterface[];
  Silver?: SponsorInterface[];
  Bronze?: SponsorInterface[];
  Diversity?: SponsorInterface[];
  Technical?: SponsorInterface[];
  Community?: SponsorInterface[];
  PastEdition?: SponsorInterface[];
};
