import { Component, HostListener, OnInit } from '@angular/core';
import { StageComponent } from '../stage/stage.component';

@Component({
  selector: 'app-flazio',
  standalone: true,
  imports: [
    StageComponent
  ],
  templateUrl: './flazio.component.html',
  styleUrl: './flazio.component.scss'
})
export class FlazioComponent implements OnInit  {
  constructor() { }

  ngOnInit(): void {
    // Ajout d'un écouteur d'événements si nécessaire
  }

  @HostListener('window:wheel', ['$event']) onScrollEvent($event: WheelEvent) {
    const delta = $event.deltaY;
    let scrollAmount = 660  ; // La quantité de scroll en pixels
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
