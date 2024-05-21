import { Component } from '@angular/core';
import { FlazioComponent } from '../flazio/flazio.component';
import { SgaComponent } from '../sga/sga.component';
import { TimeTrackComponent } from '../time-track/time-track.component';
import { GestionStageComponent } from '../gestion-stage/gestion-stage.component';

@Component({
    selector: 'app-stage',
    standalone: true,
    templateUrl: './stage.component.html',
    styleUrls: ['./stage.component.scss'],
    imports: [FlazioComponent,SgaComponent,TimeTrackComponent, GestionStageComponent]
})
export class StageComponent {
  showModalFlazio: boolean = false;
  showModalSGA: boolean = false;
  showMoreFlazio: boolean = false; 
  showMoreSGA: boolean = false;
  selectionMade: boolean = false;
  showModalTimeTrack: boolean = false;
  showModalgestionStage: boolean = false;

  selectOption(option: string) {
    this.selectionMade = true;
    this.scrollToTop(); // Appel de la fonction scrollToTop pour remonter la page
    if (option === 'Flazio') {
      this.openModalFlazio();
    } else if (option === 'SGA') {
      this.openModalSGA();
    }
    else if (option === 'TimeTrack') {
      this.openModalTimeTrack();
    }
    else if (option === 'gestionStage') {
      this.openModalgestionStage();
    }
  }

  openModalFlazio() {
    this.resetModals();
    this.showModalFlazio = true;
  }

  openModalSGA() {
    this.resetModals();
    this.showModalSGA = true;
  }

  closeModals() {
    this.resetModals();
    this.scrollToTop(); // Appel de la fonction scrollToTop pour remonter la page
    this.selectionMade = false;
  }


  private resetModals() {
    this.showModalFlazio = false;
    this.showModalSGA = false;
    this.showMoreFlazio = false;
    this.showMoreSGA = false;
    this.showModalTimeTrack = false;
    this.showModalgestionStage = false;
  }

  openModalTimeTrack() {
    this.resetModals();
    this.showModalTimeTrack = true;
  }
  openModalgestionStage() {
    this.resetModals();
    this.showModalgestionStage = true;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Fait remonter la page en haut de manière fluide
  }

}