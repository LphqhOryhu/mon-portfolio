import { Component, HostListener, OnInit } from '@angular/core';
import { StageComponent } from '../stage/stage.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-sga',
  standalone: true,
  imports: [StageComponent, CarouselComponent],
  templateUrl: './sga.component.html',
  styleUrls: ['./sga.component.scss']
})
export class SgaComponent implements OnInit {
  private scrollAmount = 625.6; // La quantité de scroll en pixels
  
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
