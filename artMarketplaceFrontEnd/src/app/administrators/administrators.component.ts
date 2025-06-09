import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // 👈 ADD THIS

interface User {
  userID: number;
  fullName: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-administrators',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.css'],
})

export class AdministratorComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<User[]>('https://localhost:7134/api/auth/users') // Replace with your real API URL
      .subscribe({
        next: (data) => {
          this.users = data;
        },
        error: (error) => {
          console.error('Error loading users', error);
        }
      });
  }
}
