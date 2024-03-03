import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarVisible = new BehaviorSubject<boolean>(false);
  private componentToShow = new BehaviorSubject<string>('main'); // Ajout du composant à afficher
  
  public sidebarVisibility$ = this.sidebarVisible.asObservable();
  public componentToShow$ = this.componentToShow.asObservable(); // Exposez le composant à afficher

  toggleSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }

  updateComponentToShow(component: string) {
    this.componentToShow.next(component);
  }
}
