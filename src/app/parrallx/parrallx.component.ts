import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { GlobalService } from '../global.service';
import { TypingComponent } from '../typing/typing.component';

@Component({
  selector: 'app-parrallx',
  standalone: true,
  templateUrl: './parrallx.component.html',
  imports: [TypingComponent],
  styleUrls: ['./parrallx.component.scss']
})
export class ParrallxComponent implements AfterViewInit, OnDestroy {
  constructor(private globalService: GlobalService) {}

  onButtonClick() {
    this.globalService.setIsPressed(true);
  }

  ngAfterViewInit() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (event: MouseEvent) => {
    const parallaxImage = document.querySelector('.parallax-image') as HTMLElement;
    const x = (event.clientX / window.innerWidth) - 0.5;
    const y = (event.clientY / window.innerHeight) - 0.5;
    const translateX = -x * 40; 
    const translateY = -y * 40; 

    parallaxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.1)`;
  }
}
