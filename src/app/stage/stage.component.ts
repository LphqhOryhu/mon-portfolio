import { Component } from '@angular/core';
import { FlazioComponent } from '../flazio/flazio.component';
import { SgaComponent } from '../sga/sga.component';

@Component({
    selector: 'app-stage',
    standalone: true,
    templateUrl: './stage.component.html',
    styleUrls: ['./stage.component.scss'],
    imports: [FlazioComponent,
      SgaComponent]
})
export class StageComponent {
  showModalFlazio: boolean = false;
  showModalSGA: boolean = false;
  showMoreFlazio: boolean = false; 
  showMoreSGA: boolean = false;
  selectionMade: boolean = false;

  selectOption(option: string) {
    this.selectionMade = true;
    if (option === 'Flazio') {
      this.openModalFlazio();
    } else if (option === 'SGA') {
      this.openModalSGA();
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
    this.selectionMade = false;
  }


  private resetModals() {
    this.showModalFlazio = false;
    this.showModalSGA = false;
    this.showMoreFlazio = false;
    this.showMoreSGA = false;
  }
}