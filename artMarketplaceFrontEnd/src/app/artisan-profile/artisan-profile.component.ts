import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-artisan-profile',
  templateUrl: './artisan-profile.component.html',
  imports: [CommonModule],
})
export class ArtisanProfileComponent implements OnInit {
  artisanId: string | null = null;
  artisan: any; // Remplace "any" par un vrai type si tu veux

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.artisanId = this.route.snapshot.paramMap.get('id');
    this.loadArtisan();
  }

  loadArtisan() {
    // Simule des données ; en vrai, utilise un service HTTP ou injecte des données
    this.artisan = {
      id: this.artisanId,
      name: 'Claire Dupont',
      photoUrl: 'assets/artisans/claire.jpg',
      bio: 'Céramiste passionnée basée à Bordeaux...',
      location: 'Bordeaux, France',
      specialties: ['Ceramics', 'Pottery'],
      products: [
        {
          name: 'Vase fait main',
          imageUrl: 'assets/products/vase.jpg',
          price: 45,
          description: 'Vase en céramique élégant.'
        },
        {
          name: 'Tasses à café',
          imageUrl: 'assets/products/mug-set.jpg',
          price: 30,
          description: 'Lot de 2 mugs artisanaux.'
        }
      ]
    };
  }
}
