import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentComponent: string = 'main';
  private subscription: Subscription = new Subscription();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.subscription = this.sidebarService.componentToShow$.subscribe(
      (component: string) => {
        this.currentComponent = component;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ouvrirBarreLaterale() {
    this.sidebarService.onToggleSidebar();
  }
}