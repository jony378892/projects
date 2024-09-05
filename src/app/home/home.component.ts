import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    public productService: ProductService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const storedData = localStorage.getItem('dataArray');
    if (storedData) {
      this.productService.dataArray = JSON.parse(storedData);
    }
  }

  cart(index: number) {
    if (this.auth.loggedIn == true) {
      this.productService.orderArray.push(this.productService.dataArray[index]);
    } else {
      alert('You need to login first');
    }
  }
}
