import { Payment } from "./payment";
import { Card } from "./card";

export class ParentPayment {
  id: string;
  amount: number;
  token: string;
  paiments: Payment[];
  cards: Card[];
}
