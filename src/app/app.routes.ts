import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProductListingComponent } from './admin/product-listing/product-listing.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { OrderListComponent } from './admin/order-list/order-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ProductSamplePageComponent } from './product-sample-page/product-sample-page.component';
import { AnimationComponent } from './animation/animation.component';
import { RatingFormComponent } from './rating-form/rating-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'signup-page', component: SignupPageComponent },
  { path: 'product-listing', component: ProductListingComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'product-page', component: ProductPageComponent },
  { path: 'review-page', component: ReviewPageComponent },
  { path: 'product-sample-page', component: ProductSamplePageComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'rating-form', component: RatingFormComponent }
];
