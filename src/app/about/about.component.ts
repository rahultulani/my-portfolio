import { Component, AfterViewInit } from '@angular/core';
import { TypewriterService } from '../../common/util/typewriter.service';
@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(
    private typeWriterService: TypewriterService
  ){

  }
  public txt1: string = "With over six years of experience in software development, I have worked across government, telecom, and enterprise sectors, building and optimizing high-performance systems. My expertise spans Java, SQL, Python, Angular, Cloud and ETL development, with a strong focus on designing scalable architectures, enhancing system efficiency, and leading development initiatives.";
  public txt2: string = "Currently, at Canada Revenue Agency, I contribute to the development and maintenance of Common User Services, ensuring robust and seamless backend and frontend integrations. Previously, I have worked at Amdocs and CSG Systems International, where I specialized in data migration, ETL pipelines, performance optimization, and automation, significantly improving processing efficiency and deployment timelines.";
  public txt3: string = "I hold a Master of Applied Computer Science from Dalhousie University, where I deepened my expertise in software engineering, databases, and cloud computing. My academic background, combined with hands-on industry experience, allows me to bridge the gap between theoretical knowledge and real-world software solutions.";
  public txt4: string = "I thrive in problem-solving environments, where I can analyze complex codebases, troubleshoot issues, and implement innovative solutions. My approach is rooted in clean coding, test-driven development, and automation, ensuring efficient and reliable software delivery."; 
  public txt5: string = "I’m always open to discussing emerging technologies, software development best practices, and new opportunities—feel free to connect!";
  private element: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.element = document.getElementById("demo2");
    if (this.element) {
      // this.typeWriterService.typeWriter(this.element, this.txt, 0, 0);
    }
  }

}
