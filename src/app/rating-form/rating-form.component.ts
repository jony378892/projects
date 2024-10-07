import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rating-form.component.html',
  styleUrl: './rating-form.component.scss'
})
export class RatingFormComponent {
  reviewFormStatus: boolean = false
  index: number = 0;
  currentStyle: Record<string, string> = {};

  productList: ProductList[] = [
    {
      id: 1,
      title: 'Product 1',
      image: '/image2.webp',
      rating: 0,
      comment: '',
      ratingStatus: false,


    },
    {
      id: 2,
      title: 'Product 2',
      image: '/image3.webp',
      rating: 0,
      comment: '',
      ratingStatus: false,

    },
    {
      id: 1,
      title: 'Product 3',
      image: '/image4.webp',
      rating: 0,
      comment: '',
      ratingStatus: false,
    },
  ];

  ratingForm(i: number) {
    this.index = i
    this.reviewFormStatus = true;

  }

  reviewForm = new FormGroup({
    rating: new FormControl(0, Validators.required),
    comment: new FormControl('', Validators.required)
  })



  starRating: number = 0;
  updateValue(i: number) {
    this.reviewForm.patchValue({
      rating: i,
    });
    this.starRating = i;
    if (i) {
      this.currentStyle = {
        'color': 'yellow'
      }
    }

  }

  onSubmit(i: number) {
    (this.productList[i] as any)['rating'] = this.reviewForm.get('rating')?.value;
    (this.productList[i] as any)['comment'] = this.reviewForm.get('comment')?.value;
    this.productList[i].ratingStatus = true;
    console.log(this.productList[i]);
    this.reviewForm.reset();
    this.reviewFormStatus = false;

  }
}

interface ProductList {
  id: number;
  title: string;
  image: string;
  rating: number;
  comment: string;
  ratingStatus: boolean;

}
