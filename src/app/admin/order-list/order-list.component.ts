import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { AuthService } from '../../auth.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
})
export class OrderListComponent {
  constructor(
    public auth: AuthService,
    public productService: ProductService
  ) {}

  deleteProduct(index: number) {
    this.productService.orderArray.splice(index, 1);
  }
}
