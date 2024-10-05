import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-sample-page',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './product-sample-page.component.html',
  styleUrl: './product-sample-page.component.scss'
})
export class ProductSamplePageComponent {
  arr = ['first', 'jony', 'rony', 'rabiul', 'fariz']
  currentIndex: number = 0;;

  select(i: number) {
    this.currentIndex = i
  }

  next() {
    this.currentIndex++;
    if (this.currentIndex == this.arr.length) {
      this.currentIndex = 0
    }
    console.log(this.currentIndex);


  }

  previous() {
    this.currentIndex--;
    if (this.currentIndex == -1) {
      this.currentIndex = this.arr.length - 1
    }
    console.log(this.currentIndex);

  }
}
