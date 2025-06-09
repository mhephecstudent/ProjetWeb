import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, NgIf],
  templateUrl: 'navbar.component.html',
  styleUrl: 'navbar.component.css'
})
export class NavbarComponent {

  constructor(public authService: AuthenticationService) {}

  get role(): string | null {
    return this.authService.getUserRole();
  }

  logout() {
    this.authService.logout();
    window.location.href = '/login'; // or use router.navigate
  }
}
