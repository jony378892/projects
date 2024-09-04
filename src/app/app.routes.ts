import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProductListingComponent } from './admin/product-listing/product-listing.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'signup-page', component: SignupPageComponent },
  { path: 'product-listing', component: ProductListingComponent },
];
