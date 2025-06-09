import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service'; // adapte le chemin

@Component({
  selector: 'app-artisans',
  templateUrl: './artisans.component.html',
  styleUrls: ['./artisans.component.css']
})
export class ArtisansComponent {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  goToArtisanProfile() {
    const artisanId = this.authService.getUserId();
    if (artisanId) {
      this.router.navigate(['/artisans', this.authService.getUserId()]);
    } else {
      console.error('User ID not found in token.');
    }
  }
}
