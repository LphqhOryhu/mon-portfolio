import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() imageLinks: string[] = [];
  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imageLinks.length;
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.imageLinks.length) % this.imageLinks.length;
  }
}
