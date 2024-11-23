import { EGender } from "./EGender.enum";
import { ETypeUser } from "./EType.enum";

export interface User {
  name: string;
  image: string;
  years: number;
  type: ETypeUser;
  email: string;
  password: string;
  phone: string;
  gender: EGender;
}
