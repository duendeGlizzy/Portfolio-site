import { Routes } from '@angular/router';
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { ProjectPageComponent } from "./components/project-page/project-page.component";

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'projects', component: ProjectPageComponent}
];
