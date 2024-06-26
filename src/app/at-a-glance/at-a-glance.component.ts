import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {Highlights} from "../common/content/strapi-page.interface";
import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";
import {ContentApiService} from "../common/content/ContentApiService";

@Component({
  selector: 'app-at-a-glance',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './at-a-glance.component.html',
  styleUrl: './at-a-glance.component.scss'
})
export class AtAGlanceComponent implements OnInit{

  content!: Highlights;

  constructor(private contentApiService: ContentApiService, private titleService: Title) {}

  ngOnInit() {
    this.contentApiService.getContent('highlights').subscribe(data => {
      this.content = data;
    });
  }
}
