import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray, FormControl} from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { User } from '../../class/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  private loading: boolean;
  private submitFailed: boolean;
  private readonly = true;
  private user: User;
  public userForm: FormGroup;
  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
    this.userForm = this.fb.group({
      username : new FormControl(this.user.username),
      email : new FormControl(this.user.email),
      name : new FormControl(this.user.name),
      surname : new FormControl(this.user.surname)
    });
  }

  saveProfile() {
    const val = this.userForm.value;
    this.loading = true;
    this.auth.saveProfile(val.name, val.surname)
        .subscribe( (user: User) => {
          this.loading = false;
          this.userForm.setValue({
            username: user.username,
            email: user.email,
            name: user.name,
            surname: user.surname,
          });
        }, () => {
          this.submitFailed = true;
          this.loading = false;
        });
  }

}
