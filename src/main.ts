import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {importProvidersFrom} from "@angular/core";
import {provideHttpClient} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideRouter, Routes} from "@angular/router";
import {HomePageComponent} from "./app/home-page/home-page.component";
import {ResumeComponent} from "./app/resume/resume.component";
import {ProjectComponent} from "./app/project/project.component";
import {ContactComponent} from "./app/contact/contact.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to home if no path specified
];

bootstrapApplication(AppComponent, {
  providers: [ importProvidersFrom(BrowserModule),
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes),


  ]
})
  .catch(err => console.error(err));
