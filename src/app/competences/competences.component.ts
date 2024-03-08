import { Component } from '@angular/core';

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
}
