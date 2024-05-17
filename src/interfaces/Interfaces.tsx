export interface RealEstate {
  image: string[];
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
}
