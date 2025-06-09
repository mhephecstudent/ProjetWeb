import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { DeliveryPartnersComponent } from './delivery-partners/delivery-partners.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { AdministratorComponent } from './administrators/administrators.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartCheckoutComponent } from './shopping-cart-checkout/shopping-cart-checkout.component';
import { ArtisanProfileComponent } from './artisan-profile/artisan-profile.component';


export const routes: Routes = [
    {path:"login", component: LoginComponent},
    { path: 'customers', component: CustomersComponent },
    { path: 'delivery-partners', component: DeliveryPartnersComponent },
    { path: 'artisans', component: ArtisansComponent, canActivate: [AuthGuard] },
    { path: 'administrators', component: AdministratorComponent },
    { path: 'register', component: RegisterComponent },
    {path:"products", component: ProductsComponent},
    {path:"shopping-cart-checkout", component: ShoppingCartCheckoutComponent},
    {path: 'artisans/:id', component: ArtisanProfileComponent}
];