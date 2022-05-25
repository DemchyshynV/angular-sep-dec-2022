import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from './services';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthorization()) {
      this.router.navigate(['cars'])
    }
  }

}
