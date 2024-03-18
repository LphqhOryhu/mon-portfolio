import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sga',
  standalone: true,
  imports: [],
  templateUrl: './sga.component.html',
  styleUrl: './sga.component.scss'
})
export class SgaComponent implements OnInit {

  ngOnInit(): void {
    // Ajout d'un écouteur d'événements si nécessaire
  }

  @HostListener('window:wheel', ['$event']) onScrollEvent($event: WheelEvent) {
    const delta = $event.deltaY;
    let scrollAmount = 625  ; // La quantité de scroll en pixels
    if (delta > 0) {
      // Scrolling vers le bas
      window.scrollBy(0, scrollAmount);
    } else {
      // Scrolling vers le haut
      window.scrollBy(0, -scrollAmount);
    }
    $event.preventDefault();
  }

}
