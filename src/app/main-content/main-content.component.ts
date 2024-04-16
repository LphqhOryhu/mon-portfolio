import { Component } from '@angular/core';
import { TypingComponent } from '../typing/typing.component';
import { Experience } from '../models/experience.model';
import { ExperienceService } from '../experience.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [TypingComponent, ModalComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  experiences: Experience[] = [];  
  isModalOpen: boolean = false; 
  selectedExperienceId: number | null = null;
  currentImage: string | null = null;

  toggleImage(imageName: string) {
    if (this.currentImage === `assets/${imageName}`) {
      this.currentImage = null;
    } else {
      this.currentImage = `assets/${imageName}`;
    }
  }

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experiences = this.experienceService.getExperiences();
  }

  openModal(experienceId: number): void {
    // Réinitialiser l'identifiant d'expérience
    this.selectedExperienceId = null;
    // Assigner la nouvelle valeur
    this.selectedExperienceId = experienceId;
    // Ouvrir la modal
    this.isModalOpen = true;  
    
  }

  // Assurez-vous d'avoir une méthode pour fermer la modal qui réinitialise selectedExperienceId
  closeModal(): void {
    this.isModalOpen = false;
    // Autres actions de nettoyage si nécessaire
  }

  selectExperience(experienceId: number): void {
    if (this.selectedExperienceId === experienceId) {
      // Si l'expérience déjà sélectionnée est cliquée à nouveau, fermez-la
      this.closeModal();
    } else {
      // Sinon, ouvrez la modal pour la nouvelle expérience
      this.selectedExperienceId = experienceId;
      this.isModalOpen = true;
    }
}


}


