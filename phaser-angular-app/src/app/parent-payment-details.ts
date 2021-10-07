import { Payment } from "./payment";
import { User } from "./user";

export class ParentPaymentDetails {
  id: string;
  amount: number;
  token: string;
  paiments: Payment[];
  user: User;
}
