import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  selectedImage: number = 0;
  productList: string[] = [
    '/image1.jpeg',
    '/image2.webp',
    '/image3.webp',
    '/image4.webp',
    '/image5.webp',
  ];

  selectImage(i: number) {
    this.selectedImage = i;
  }

  previous() {
    this.selectedImage--;
    if (this.selectedImage == -1) {
      this.selectedImage = this.productList.length - 1
    }
  }

  next() {
    this.selectedImage++;
    if (this.selectedImage == this.productList.length) {
      this.selectedImage = 0
    }
  }


}
