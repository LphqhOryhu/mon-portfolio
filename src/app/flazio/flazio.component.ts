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
  private scrollAmount = 784; // La quantité de scroll en pixels
  
  ngOnInit(): void {
    // Initialisation si nécessaire
  }

  @HostListener('window:wheel', ['$event'])
  onScrollEvent($event: WheelEvent): void {
    $event.preventDefault(); // Empêche le scroll par défaut pour éviter les doubles mouvements
    
    const direction = $event.deltaY > 0 ? 1 : -1; // Détermine la direction du scroll
    const targetScrollPosition = window.pageYOffset + (this.scrollAmount * direction);
    
    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth' // Fournit un effet de défilement fluide
    });
  }
}
