import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-track',
  standalone: true,
  templateUrl: './time-track.component.html',
  styleUrls: ['./time-track.component.scss']
})
export class TimeTrackComponent implements OnInit {
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
