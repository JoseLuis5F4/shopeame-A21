import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
})
export class RatingStarComponent implements OnChanges {
  @Input() rating: number = 0;
  starArray: number[] = [];

  ngOnChanges(): void {
    this.starArray = Array(5)
      .fill(0)
      .map((_, i) => {
        if (i < Math.floor(this.rating)) {
          return 1;
        } else if (i < this.rating) {
          return 0.5;
        } else {
          return 0;
        }
      });
  }
}
