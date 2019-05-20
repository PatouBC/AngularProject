import { Component, OnInit } from '@angular/core';
import { TitleService } from './service/title.service';
import { AuthService } from './service/auth.service';
import { User } from './class/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened: boolean;
  user: User|null;
  
  showMenu = false;


  constructor(private titleService: TitleService, private auth: AuthService) {}

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  ngOnInit(): void {
    this.titleService.init();
  }

  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }

  logout(): void {
    return this.auth.logout();
  }


}
