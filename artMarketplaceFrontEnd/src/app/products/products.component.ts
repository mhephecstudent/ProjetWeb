import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
  artisan?: {
    name: string;
  };
  customizationOptions?: string[];
  reviews?: { rating: number; comment: string }[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'Product Dashboard';
  
  // All products loaded from the API
  products: Product[] = [];
  // Products to display after filtering/sorting
  displayedProducts: Product[] = [];

  // Filtering and sorting properties
  searchTerm: string = '';
  selectedCategory: string = '';
  sortOption: string = 'priceAsc';

  // Sample categories (you might fetch this dynamically)
  categories: string[] = ['Jewelry', 'Clothing', 'Home Decor'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    // Replace with your API endpoint as needed.
    this.http.get<Product[]>('https://localhost:7134/api/products').subscribe({
      next: (data) => {
        this.products = data;
        this.updateDisplayedProducts();
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  // Update displayedProducts based on search, category, and sort options
  updateDisplayedProducts(): void {
    let filtered = [...this.products];

    // Filter by search term (if provided)
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      );
    }

    // Filter by category (if selected)
    if (this.selectedCategory) {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    // Sort the filtered array
    if (this.sortOption === 'priceAsc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'priceDesc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.sortOption === 'ratingDesc') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    this.displayedProducts = filtered;
  }
}
