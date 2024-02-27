import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private sidebarService: SidebarService) {}

  onToggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }
}
