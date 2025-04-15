import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home' },
  {path: 'about', component: AboutComponent, title: 'About' },
  {path: 'work', component: WorkComponent, title: 'Work' },
  {path: 'projects', component: ProjectsComponent, title: 'Projects' },
  {path: 'resume', component: ResumeComponent, title: 'Resume' },
  {path: 'contact', component: ContactComponent, title: 'Contact' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
