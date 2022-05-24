import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  userNameError: string;

  constructor(private authService: AuthService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)])
    }, [this._checkPasswords])
  }

  register(): void {
    const rawValue = this.form.getRawValue();
    delete rawValue.confirmPassword;
    this.authService.register(rawValue).subscribe(
      () => {
        console.log('dddddddddddd');
        this.router.navigate(['login'])
      },
      e => this.userNameError = e.error.username[0]
    )

  }

  _checkPasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')
    return password?.value === confirmPassword?.value ? null : {notSame: true}
  }
}
