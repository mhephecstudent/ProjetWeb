
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';  // Import RouterModule for router directives
import { NavbarComponent } from './navbar/navbar.component'; // Adjust path if needed
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet />

  `,
  imports: [CommonModule, NavbarComponent, RouterModule, RouterOutlet]  // Include both NavbarComponent and RouterModule
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Your initialization logic here.
  }
}

