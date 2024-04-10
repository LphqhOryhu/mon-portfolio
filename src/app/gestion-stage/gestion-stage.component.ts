import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-stage',
  standalone: true,
  imports: [],
  templateUrl: './gestion-stage.component.html',
  styleUrl: './gestion-stage.component.scss'
})
export class GestionStageComponent {
  private scrollAmount = 625.6; // Adapt this value as needed

  ngOnInit(): void {
    // Any initialization code goes here
  }

  @HostListener('window:wheel', ['$event'])
  onScrollEvent($event: WheelEvent): void {
    $event.preventDefault();
    const direction = $event.deltaY > 0 ? 1 : -1;
    const targetScrollPosition = window.pageYOffset + (this.scrollAmount * direction);
    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth'
    });
  }
}
