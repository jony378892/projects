import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../product.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss',
})
export class ProductListingComponent {
  constructor(public productService: ProductService) {}

  productDetails = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    stock: new FormControl(Validators.required),
    color: new FormControl('', Validators.required),
    price: new FormControl(Validators.required),
  });
  onSubmit() {
    if (this.productDetails.valid) {
      this.productService.addProduct(this.productDetails.value);
    }
    this.productDetails.reset();
  }
}
