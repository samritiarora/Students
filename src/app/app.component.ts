import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from './shared/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Students';

  currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
      //debugger;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
