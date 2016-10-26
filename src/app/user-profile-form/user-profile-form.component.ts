import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup }       from '@angular/forms';

import { Gender, User } from './../models/user.model';

/**
 Validators:
   firstName - required, capitalized, a-z
   lastName - required, capitalized, a-z
   email - required, email pattern
   gender - required
   birthday: {
     day - required, number from 1 to 31
     month - required, number from 1 to 12
     year - required, number from 1900 to the current year
   }

   // JavaScript APIs
   FormGroup -> 'user'
       FormControl -> 'firstName'
       FormControl -> 'lastName'
       FormControl -> 'email'
       FormControl -> 'gender'
       FormGroup -> 'birthday'
           FormControl -> 'day'
           FormControl -> 'month'
           FormControl -> 'year'

   // DOM bindings
   formGroup -> 'user'
       formControlName -> 'firstName'
       formControlName -> 'lastName'
       formControlName -> 'email'
       formControlName -> 'gender'
       formGroupName -> 'birthday'
           formControlName -> 'day'
           FormControlName -> 'month'
           FormControlName -> 'year'

 */


@Component({
  selector: 'user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.less']
})
export class UserProfileFormComponent implements OnInit, OnDestroy {

  private readonly currentYear = new Date().getFullYear();
  private user: FormGroup;

  constructor (private fb: FormBuilder) {

  }

  public ngOnInit(): void {
    this.user = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      gender: [Gender[Gender.female]],
      birthday: this.fb.group({
        day: [1],
        month: [3],
        year: [this.currentYear]
      })
    });
  }

  public ngOnDestroy(): void {
  }
}