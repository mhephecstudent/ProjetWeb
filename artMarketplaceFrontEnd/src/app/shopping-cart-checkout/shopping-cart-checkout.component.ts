import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-shopping-cart-checkout',
  standalone: true,
  templateUrl: './shopping-cart-checkout.component.html',
  styleUrls: ['./shopping-cart-checkout.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ShoppingCartCheckoutComponent implements OnInit {
  // Simulated cart items (in a real app, you'd load these from a service)
  cartItems: CartItem[] = [
    { name: 'Handcrafted Ceramic Vase', price: 45.99, quantity: 1 },
    { name: 'Artisan Silver Necklace', price: 120.50, quantity: 2 }
  ];

  // Booleans to control which section is displayed
  checkoutActive: boolean = false;
  checkoutComplete: boolean = false;

  // Reactive Form for checkout details
  checkoutForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    // Initialize the checkout form with validators
    this.checkoutForm = this.fb.group({
      shipping: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{13,19}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\\/([0-9]{2})$')]], // Format: MM/YY
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  // Calculate the total cost of items in the cart
  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Called when the user clicks "Proceed to Checkout"
  proceedToCheckout(): void {
    this.checkoutActive = true;
  }

  // Called when the checkout form is submitted
  submitOrder(): void {
    if (this.checkoutForm.invalid) {
      return;
    }

    // For demonstration, we'll simply log the order and mark checkout as complete.
    // In a real application, you might send this data to your backend.
    const orderDetails = {
      cartItems: this.cartItems,
      total: this.getCartTotal(),
      shipping: this.checkoutForm.value.shipping,
      payment: {
        cardNumber: this.checkoutForm.value.cardNumber,
        expiryDate: this.checkoutForm.value.expiryDate,
        cvv: this.checkoutForm.value.cvv
      }
    };

    console.log('Submitting Order:', orderDetails);

    // Simulate an HTTP request (uncomment if you have an endpoint)
    // this.http.post('https://yourapi.com/orders', orderDetails).subscribe(response => {
    //   console.log('Order submitted successfully', response);
    //   this.checkoutComplete = true;
    //   this.checkoutActive = false;
    // });

    // For now, simulate successful order submission:
    this.checkoutComplete = true;
    this.checkoutActive = false;
  }
}
