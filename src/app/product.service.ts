import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  dataArray: any[] = [];
  orderArray: any[] = [];
}
