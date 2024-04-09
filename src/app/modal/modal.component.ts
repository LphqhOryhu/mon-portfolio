import { Component, Input, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { Experience } from '../models/experience.model';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MainContentComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() experienceId!: number;
  experience: Experience = { id: 0, year: '', duree:'', role: '', company: '', description: ''};

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.loadExperience();
  }

  loadExperience(): void {
    const exp = this.experienceService.getExperienceById(this.experienceId);
    if (exp) {
      this.experience = exp;
    } else {
      console.error('Experience not found');
    }
  }

  // Méthode pour changer l'ID de l'expérience dans la modal
  changeExperienceId(increment: number): void {
    this.experienceId += increment;
    this.loadExperience(); // Recharger l'expérience avec le nouvel ID
  }
}
