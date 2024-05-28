import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [],
})
export class SidebarComponent implements OnInit, OnDestroy {
  isVisible: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.subscription = this.sidebarService.sidebarVisibility$.subscribe(
      (isVisible: boolean) => {
        this.isVisible = isVisible;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showComponent(component: string): void {
    this.sidebarService.toggleSidebar(); 
    this.sidebarService.updateComponentToShow(component);
    this.scrollToTop(); // Appel de la fonction scrollToTop pour remonter la page
    console.log('Component to show: ', component);
  }

  fermerBarreLaterale() {
    this.sidebarService.onCloseSidebar();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Fait remonter la page en haut de manière fluide
  }
}
