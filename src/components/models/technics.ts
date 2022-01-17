export interface TechState {
  technics: Array<{
    id: string;
    category: string;
    company: string;
    model: string;
    price: number;
    date: string;
    description: string;
  }>;
}

export interface Technics {
  id: string;
  category: string;
  company: string;
  model: string;
  price: number;
  date: string;
  description: string;
}
