import { Component } from '@angular/core';

@Component({
  selector: 'app-stage',
  standalone: true,
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent {
  showModalFlazio: boolean = false;
  showModalSGA: boolean = false;
  showMoreFlazio: boolean = false; 
  showMoreSGA: boolean = false; 

  selectOption(option: string) {
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
  }

  viewMoreFlazio() {
    this.resetModals();
    this.showMoreFlazio = true;
  }

  viewMoreSGA() {
    this.resetModals();
    this.showMoreSGA = true;
  }

  private resetModals() {
    this.showModalFlazio = false;
    this.showModalSGA = false;
    this.showMoreFlazio = false;
    this.showMoreSGA = false;
  }
}