export interface TicketInterface {
  visible: boolean;
  name: string;
  subtitle: string;
  price: string | number;
  realPrice?: string | number;
  features: string[];
  event?: string;
  ticket?: string;
  popular?: boolean;
  bestExperience?: boolean;
  active?: boolean;
  soldOut?: boolean;
  saleStart?: string;
  saleEnd?: string;
}
