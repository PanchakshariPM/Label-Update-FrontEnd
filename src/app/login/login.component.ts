import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, QueryList } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: any;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);



  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      this.router.navigate(['/home'])
    }
  }

}
