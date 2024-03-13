import { Component } from '@angular/core';
import { Veille } from '../models/veille.model';
import { VeilleService } from '../veille.service';
import {MatButtonToggleChange, MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-veille',
  standalone: true,
  imports: [
    MatButtonToggleModule,
    

  ],
  templateUrl: './veille.component.html',
  styleUrl: './veille.component.scss'
})
export class VeilleComponent {
  veilles: Veille[];
  showModalOutils: boolean = false;
  selectedBornage: string = 'Méthodologies et Techniques de Pentest'; // valeur par défaut

  onValueChange(event: MatButtonToggleChange) {
    this.selectedBornage = event.value;
  }


  constructor(private veilleService: VeilleService) { 
    this.veilles = this.veilleService.getVeilles();
  }

  toggleModal() {
    this.showModalOutils = !this.showModalOutils;
  }

  updateSelectedBornage(bornage: string) {
    this.selectedBornage = bornage;
  }
}