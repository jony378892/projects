import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgClass],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  rating!: number;
  stars = Array(5).fill(0);

  setRating(i: number) {
    this.rating = i;
    console.log(i);
  }

  getStarClass(i: number): string {

    return i <= this.rating ? 'text-amber-500' : 'text-gray-300';
  }
}
