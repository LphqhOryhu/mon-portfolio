import { Component } from '@angular/core';
import { Veille } from '../models/veille.model';
import { VeilleService } from '../veille.service';

@Component({
  selector: 'app-veille',
  standalone: true,
  imports: [],
  templateUrl: './veille.component.html',
  styleUrl: './veille.component.scss'
})
export class VeilleComponent {
  veilles: Veille[];
  constructor(private veilleService: VeilleService) { 
    this.veilles = this.veilleService.getVeilles();
  }


  ngOnInit(): void {

  }
}
