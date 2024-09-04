import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../product.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss',
})
export class ProductListingComponent implements OnInit {
  constructor(
    public productService: ProductService,
    public auth: AuthService
  ) {}

  productDetails: any = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });
  

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const storedData = localStorage.getItem('dataArray');
    if (storedData) {
      this.productService.dataArray = JSON.parse(storedData);
    }
  }

  saveData() {
    localStorage.setItem('dataArray', JSON.stringify(this.productService.dataArray));
  }

  onSubmit() {
    if (this.productDetails.valid) {
      this.productService.dataArray.push(this.productDetails.value);
      this.saveData();
      this.productDetails.reset();
    }
  }
}
