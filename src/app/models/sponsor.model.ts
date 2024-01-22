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
  technical = 'technical',
  Community = 'community',
}

export type Sponsors = {
  Main?: SponsorInterface[];
  Gold?: SponsorInterface[];
  Silver?: SponsorInterface[];
  Bronze?: SponsorInterface[];
  Diversity?: SponsorInterface[];
  technical?: SponsorInterface[];
  Community?: SponsorInterface[];
};
