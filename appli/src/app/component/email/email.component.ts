import { Component, OnInit } from '@angular/core';
import {EmailService} from '../../service/email.service';
import {Email} from '../../class/email';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  emailSent: boolean;
  emailFailed: boolean;
  email: Email;
  emailForm: FormGroup;
  constructor(private emailService: EmailService, private fb: FormBuilder) { }

  ngOnInit() {
    this.emailForm = this.fb.group({
      name: [ null, Validators.required ],
      firstname: [ null, Validators.required ],
      address: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')
      ])),
      object: [ null, Validators.required ],
      message: [ null, Validators.required ],
      rgpd: [ null, Validators.required ]

    });
  }
  createEmail() {
    const val = this.emailForm.value;
    this.emailService.createEmail(val).subscribe(() => {
      this.emailSent = true;
    }, () => {
      this.emailFailed = true;
    });

  }
}
