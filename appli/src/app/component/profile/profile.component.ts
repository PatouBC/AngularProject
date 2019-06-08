import { Component, OnInit } from '@angular/core';
import {User} from '../../class/user';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loading: boolean;
  submitFailed: boolean;
  readonly = true;
  user: User;
  userForm: FormGroup;
  constructor(private auth: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

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
          this.router.navigate(['/perso']);
        }, () => {
          this.submitFailed = true;
          this.loading = false;
        });
  }


}
