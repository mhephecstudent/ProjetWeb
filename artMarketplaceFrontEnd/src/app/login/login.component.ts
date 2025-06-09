import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup;

  constructor(private authService: AuthenticationService, private router: Router){
    this.loginForm= new FormGroup({
      userName: new FormControl("", [Validators.required,  ]),
      password: new FormControl("", [Validators.required, 
                // Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")
      ]),
    })
  }

  login(){
    this.authService.Login(this.loginForm.value.userName, this.loginForm.value.password)
        .subscribe((response : any) => {
          console.log("response",response);
          if(response.token){
            this.authService.saveToken(response.token);
            this.router.navigate(["/"]);
          }
  
        });
  }

}
