import { Mäklare } from "./MäklareInterface";

export interface RealEstate {
  images: File[];
  id?: string | number;
  category: string;
  place: string;
  address: string;
  rooms: string;
  price: number;
  description?: string;
  contractType: string;
  livingArea: string;
  showing: string;
  buildYear: string;
  agent: Mäklare;
}
