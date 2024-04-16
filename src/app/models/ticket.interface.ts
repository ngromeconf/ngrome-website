export interface TicketInterface {
  category: string;
  visible: boolean;
  name: string;
  subtitle: string;
  price: string | number;
  realPrice?: string | number;
  featuresDescription?: string;
  features: string[];
  event?: string;
  ticket?: string;
  popular?: boolean;
  bestExperience?: boolean;
  active?: boolean;
  soldOut?: boolean;
  saleStart?: string;
  saleEnd?: string;
  remains?: number;
}
