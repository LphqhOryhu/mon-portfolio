import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
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
  }

  fermerBarreLaterale() {
    this.sidebarService.onCloseSidebar();
  }
}