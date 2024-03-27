import {Component, OnInit} from '@angular/core';
import {Achievements, Skills, WorkExperiences} from "../common/content/strapi-page.interface";
import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";
import {catchError, forkJoin} from 'rxjs';
import {NgTemplateOutlet} from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from "@angular/material/button";
import {ContentApiService} from "../common/content/ContentApiService";


@Component({
  standalone: true,
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  imports: [
    NgTemplateOutlet, MatIconModule, MatDividerModule, MatChipsModule, MatTooltipModule, MatButtonModule
  ],
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit{

  experiences!: WorkExperiences;
  skills!: Skills;
  achievements!: Achievements;

  constructor(private contentApiService: ContentApiService, private http: HttpClient, private titleService: Title) {}

  ngOnInit() {
    this.setTitle();
    let experienceObs = this.contentApiService.getContent('work-experiences').pipe( catchError(error => this.handleError(error)));
    let skillsObs = this.contentApiService.getContent('skills').pipe( catchError(error => this.handleError(error)));
    let achievementsObs = this.contentApiService.getContent('achievements').pipe( catchError(error => this.handleError(error)));

    forkJoin([experienceObs, skillsObs, achievementsObs]).subscribe(([r1, r2, r3]) => {
      this.experiences = r1 as WorkExperiences;
      this.skills = this.sortSkills(r2 as Skills);
      this.achievements = r3 as Achievements;
    })

  }

  sortSkills(skills: Skills): Skills {
     skills.data.sort((a, b) => {
      const yearsA = parseInt(a.attributes.years, 10);
      const yearsB = parseInt(b.attributes.years, 10);
      return yearsB - yearsA;
    });
    return skills;
  }

  formatDate(inputDate: string) {
    const date = new Date(inputDate);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${year}`;
  }

  downloadResume() {
    this.http.get('/assets/cory.kniefel.pdf', { responseType: 'blob' }).pipe( catchError(error => this.handleError(error)))
      .subscribe(response => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'cory.kniefel.pdf';
        anchor.click();
      });
  }

  handleError(error: any): never[] {
    console.error(error)
    return [];
  }

  private setTitle() {
    this.titleService.setTitle("Resume")
  }
}
