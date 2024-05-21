import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private isPressedSubject = new BehaviorSubject<boolean>(false);
  isPressed$ = this.isPressedSubject.asObservable();

  constructor() { }

  setIsPressed(value: boolean) {
    this.isPressedSubject.next(value);
  }
}
