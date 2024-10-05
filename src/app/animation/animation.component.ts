import { Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.scss'
})
export class AnimationComponent {
  constructor(private ele: ElementRef) {
  }

  animationCount: any = new FormControl<number | null>(null, Validators.required)

  onSubmit(i: number) {
    i = this.animationCount.value;
    this.ele.nativeElement.querySelector('#animate').style.animationIterationCount = i;
    this.ele.nativeElement.querySelector('#animate').style.animationPlayState = 'running';
  }
}
