import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-typing',
  standalone: true,
  imports: [],
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.scss'
})
export class TypingComponent implements OnInit {
  text = '';
  private fullText = ' Hugo DE BRABANDER';
  private currentChar = 0;
  private typingSpeed = 150; // Vitesse en ms

  constructor() { }

  ngOnInit(): void {
    this.typeText();
  }

  private typeText() {
    if (this.currentChar < this.fullText.length) {
      this.text += this.fullText.charAt(this.currentChar);
      this.currentChar++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    } else {
      // Attendre un peu avant de commencer l'effacement
      setTimeout(() => this.eraseText(), 7000);
    }
  }

  private eraseText() {
    if (this.currentChar > 0) {
      this.text = this.fullText.substring(0, this.currentChar - 1);
      this.currentChar--;
      setTimeout(() => this.eraseText(), this.typingSpeed);
    } else {
      setTimeout(() => this.typeText(), 1000);
    }
  }
}
  