import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {

  constructor() { }

  typeWriter(element: HTMLElement, txt: String, i: number = 0, speed: number = 100, eraseDelay: number = 1000): void {
    if (element) {
      if (i < txt.length) {
        element.innerHTML += txt.charAt(i);
        i++;
        setTimeout(() => this.typeWriter(element, txt, i), speed, eraseDelay);
      } 
      else {
        setTimeout(() => this.eraseText(element, txt, i), eraseDelay);
      }
    }
  }

  eraseText(element: HTMLElement, txt: String, i: number = 0, speed: number = 100, eraseDelay: number = 1000): void {
    if (element) {
      if (i > 0) {
        element.innerHTML = txt.substring(0, i - 1);
        i--;
        setTimeout(() => this.eraseText(element, txt, i, speed, eraseDelay), speed / 2);
      } else {
        setTimeout(() => this.typeWriter(element, txt, i, speed, eraseDelay), eraseDelay);
      }
    }
  }
}
