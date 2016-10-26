export enum Gender {
  male,
  female
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  birthday: {
    day: number;
    month: number;
    year: number;
  }
}