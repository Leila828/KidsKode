import { NiveauPayment } from "./niveau-payment";

export class Payment {
  id: string;
  montant: number;
  date: string;
  niveau: NiveauPayment;
}
