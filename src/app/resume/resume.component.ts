import {Component, OnInit} from '@angular/core';
import {
  Achievements,
  Highlights,
  Skill,
  Skills,
  WorkExperience,
  WorkExperiences
} from "../common/content/strapi-page.interface";
import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";
import { Observable, catchError, forkJoin } from 'rxjs';
import {NgTemplateOutlet} from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';


@Component({
  standalone: true,
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  imports: [
    NgTemplateOutlet, MatIconModule, MatDividerModule, MatChipsModule, MatTooltipModule
  ],
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit{

  experiences!: WorkExperiences;
  skills!: Skills;
  achievements!: Achievements;

  constructor(private http: HttpClient, private titleService: Title) {}

  ngOnInit() {
    let experienceObs = this.http.get('/assets/work-experiences.exported.json').pipe( catchError(error => handleError(error)));
    let skillsObs = this.http.get('/assets/skills.exported.json').pipe( catchError(error => handleError(error)));
    let achievementsObs = this.http.get('/assets/achievements.exported.json').pipe( catchError(error => handleError(error)));

    forkJoin([experienceObs, skillsObs, achievementsObs]).subscribe(([r1, r2, r3]) => {
      this.experiences = r1 as WorkExperiences;
      this.skills = this.sortSkills(r2 as Skills);
      this.achievements = r3 as Achievements;
    })

    const handleError = (error: any) => {
      console.error(error)
      return [];
    }



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

    // Get month and year
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${month}/${year}`;
  }



  logItem(item: any) {
    console.log("Logging item:", item)
  }

}
