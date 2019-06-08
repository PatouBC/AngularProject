import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss']
})
export class PersoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toProfile() {
    this.router.navigate(['/profile']);
  }
  toRdv() {
    this.router.navigate(['/rendezvous']);
  }
}
