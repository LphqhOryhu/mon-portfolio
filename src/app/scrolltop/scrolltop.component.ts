import { Component } from '@angular/core';


@Component({
  selector: 'app-scrolltop',
  standalone: true,
  imports: [],
  templateUrl: './scrolltop.component.html',
  styleUrl: './scrolltop.component.scss'
})
export class ScrollToTopComponent {

  constructor() { }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Pour un effet de défilement doux
    });
  }
}