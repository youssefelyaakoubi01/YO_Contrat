import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit, OnDestroy {
  firstName!: any;
  lastName!: any;
  password!: any;
  email!: any;
  password_confirmer!:any;
  rep: any = null;
  registerForm!: FormGroup;
  public col: any = null;
  constructor(private userService: UsersService, private route: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z0-9!@#$%^&*()_+=-{}[]|\\:;"\'<>,.?/~`]+'),
      ]),
      password_confirmer: new FormControl('', [
        Validators.required,
        Validators.minLength(5)

      ]),
    });
    this.firstName = this.registerForm.get('firstName');
    this.lastName = this.registerForm.get('lastName');
    this.email = this.registerForm.get('email');
    this.password = this.registerForm.get('password');
    this.password_confirmer = this.registerForm.get('password_confirmer')
  }

  public saveForm(): void {
    this.userService.saveUser(this.registerForm.value).subscribe((data) => {
      let resp!: any;
      resp = data;
      this.rep = resp.resp;
      console.log(this.rep);
      if (this.rep != "L'utilisateur deja exsite!") {
        this.col = 1;
        setTimeout(() => {
          this.route.navigate(['/login']);
        }, 1000);
      } else if (this.rep == "L'utilisateur deja exsite!") {
        setTimeout(() => {
          this.rep = null;
        }, 2000);
      }
    });
  }

  ngOnDestroy(): void {}
}
