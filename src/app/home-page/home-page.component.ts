import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";
import {StrapiPage} from "../common/content/strapi-page.interface";
import {MatButtonModule} from '@angular/material/button';
import {AtAGlanceComponent} from "../at-a-glance/at-a-glance.component";
import {MatCardModule} from "@angular/material/card";

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [MatButtonModule, AtAGlanceComponent, MatCardModule]
})
export class HomePageComponent implements OnInit{

  content!: StrapiPage;

  constructor(private http: HttpClient, private titleService: Title) {}

  ngOnInit() {
    this.http.get('/assets/home-page.exported.json').subscribe((data: any) => {
      console.log(data)
      this.content = data;
      this.setTitle();
    });
  }

  private setTitle() {
    this.titleService.setTitle("Home")
  }
}
