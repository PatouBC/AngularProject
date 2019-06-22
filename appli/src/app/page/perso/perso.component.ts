import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EmailService} from '../../service/email.service';
import {Email} from '../../class/email';
import {AuthService} from '../../service/auth.service';
import {User} from '../../class/user';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss']
})
export class PersoComponent implements OnInit {
  emails: Email[];
  private user: User;
  constructor(private router: Router, private emailService: EmailService, private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
    this.getMessages(this.user.id);
  }

  toProfile() {
    this.router.navigate(['/profile']);
  }
  toRdv() {
    this.router.navigate(['/rendezvous']);
  }

  getMessages(userId: number) {
    this.emailService.getEmailsByUser(userId).subscribe((emails: Email[]) => {
      this.emails = emails;
    });
  }
}
