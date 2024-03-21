import { Component } from '@angular/core';
import { TypingComponent } from '../typing/typing.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [TypingComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
