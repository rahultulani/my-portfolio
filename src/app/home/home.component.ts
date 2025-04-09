import { Component, ViewEncapsulation, OnInit, AfterViewInit  } from '@angular/core';
import { TypewriterService } from '../../common/util/typewriter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrl: './home.component.css',
  // encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  brightness: string = "10%";
  constructor(
    private typeWriterService: TypewriterService
  ){}

  title = "my-portfolio";
  private txt: string = 'Software Developer | An enthusiastic problem solver';
  private element: HTMLElement | null = null;

  ngOnInit(): void {
    this.element = document.getElementById("demo");
    if (this.element) {
      this.typeWriterService.typeWriter(this.element, this.txt, 0, 100);
    } 
  }

  // ngAfterViewInit(): void {
  //   this.element = document.getElementById("demo");
  //   if (this.element) {
  //     this.typeWriterService.typeWriter(this.element, this.txt, 0, 100);
  //   }
  // }

  calculateBrightness() : string{
    return "10%";
  }
}
