import { FormControl }  from '@angular/forms';

export abstract class UserProfileFormValidator {

  public static readonly emailPattern = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

  public static numberInRange(min: number, max: number): any {
    return (control: FormControl): {[key: string]: boolean} => {

      let value: number = control.value;

      return (value < min || value > max) ? {"invalidRange": true } : null;
    };
  }

}