import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestServiceService } from '../rest-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public auth:boolean = false
  public isSubmit:boolean = false
  invalidCredentialMsg! : string 

  public validate() {
    const uname = this.loginForm.value.username;
    const pwd = this.loginForm.value.password;
    this.restService
      .isUserAuthenticated(uname, pwd)
      .subscribe({next:(authenticated) => {
        if (authenticated) {
          localStorage.setItem('username', uname)
          this.router.navigate(['/book-ride']);
        } else {
          this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
        }
      }});
    this.isSubmit = true
    
  }

  get username() {
    return this.loginForm.controls['username']
  }

  get password() {
    return this.loginForm.controls['password']
  }

  loginForm!:FormGroup
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private restService: RestServiceService) { }

  ngOnInit(): void {
    

    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
   });
  }

}
