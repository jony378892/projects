import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public productService: ProductService) {
    console.log(this.productService.productList);
  }
}
