import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Gender, User } from './../models/user.model';

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
        year: [this.currentYear],

      })
    });
  }

  public ngOnDestroy(): void {
  }
}