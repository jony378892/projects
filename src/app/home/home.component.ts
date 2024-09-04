import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const storedData = localStorage.getItem('dataArray');
    if (storedData) {
      this.productService.dataArray = JSON.parse(storedData);
    }
  }
}
