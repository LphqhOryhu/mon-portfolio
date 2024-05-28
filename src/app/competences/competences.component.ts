import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss'
})
export class CompetencesComponent {
  public dernierePreuveClique: string = '';
  public enregistrerPreuve(nomPreuve: string): void {
    this.dernierePreuveClique = nomPreuve;
  }
  private scrollAmount = 625.6; // La quantité de scroll en pixels
  
  ngOnInit(): void {
    // Initialisation si nécessaire
  }
   @HostListener('window:wheel', ['$event'])
  onScrollEvent($event: WheelEvent): void {

   


  }

  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Fait remonter la page en haut de manière fluide
  }
}
