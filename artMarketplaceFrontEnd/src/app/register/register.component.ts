import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //  Import FormsModule
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule,NgIf], //  ADD FormsModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  role: string = '';
  passwordMismatch: boolean = false;

  onSubmit() {
    if (this.password !== this.repeatPassword) {
      this.passwordMismatch = true;
      console.log('Registration failed')
      return;
    }

    this.passwordMismatch = false;
    console.log('Registration successful:', {
      fullName: this.fullName,
      email: this.email,
      role: this.role
    });
  }
}
