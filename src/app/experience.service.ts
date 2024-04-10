import { Injectable } from '@angular/core';
import { Experience } from '../../src/app/models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiences: Experience[] = [
    {
      id: 1,
      year: 'Juillet 2020',
      duree: '3 ans',
      role: 'Baccalauréat Sciences et Technologies de l\'Industrie et du Développement Durable, mention Européenne',
      company: 'Pont-Audemer',
      description: 'Diplôme obtenu en 2020 avec mention Européenne.',
    },
    {
      id: 2,
      year: 'Aout 2021',
      duree: '2 mois',
      role: 'Agent logistique',
      company: 'Bip&Go',
      description: 'Gestion des opérations logistiques et support aux processus de distribution.',
    },
    {
      id: 3,
      year: 'Juillet 2022',
      duree: '2 ans',
      role: 'Licence Électronique Énergie Électrique Automatique',
      company: 'Saint-Etienne du Rouvray',
      description: 'Cursus universitaire axé sur l\'électronique, l\'énergie électrique et l\'automatique.',
    },
    {
      id: 4,
      year: 'Aout 2022',
      duree: '2 mois',
      role: 'Agent logistique',
      company: 'Bip&Go',
      description: 'Gestion des opérations logistiques et support aux processus de distribution.',
    },
    {
      id: 5,
      year: 'Juillet 2023',
      duree: '2 mois',
      role: 'ERASMUS :Stage en développement web',
      company: 'Flazio, Sicile',
      description: 'Conception et mise en œuvre de fonctionnalités front-end pour des applications web.',
    },
    {
      id: 6,
      year: 'Septembre 2023',
      duree: '1 ans',
      role: 'Employé polyvalent en restauration',
      company: 'Asuka',
      description: 'Responsable du service client et de la préparation des commandes.',
    },
    {
      id: 7,
      year: 'Février 2024',
      duree: '6 semaines',
      role: 'Stage en développement web',
      company: 'SGA Mobility',
      description: 'Participation à des projets de développement web en utilisant Angular et Tailwind CSS.',
    },
    {
      id: 8,
      year: 'Juillet 2024',
      duree: '2 ans',
      role: 'BTS Services informatiques aux organisations, option SLAM',
      company: 'Le Mesnil-Esnard',
      description: 'Formation en cours axée sur les solutions logicielles et applications métiers.',
    },



  ];
  

  getExperiences() {
    return this.experiences;
  }

  getExperienceById(id: number) {
    return this.experiences.find(experience => experience.id === id);
  }
}
