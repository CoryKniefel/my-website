import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {

  }

  private setTitle() {
    this.titleService.setTitle("Contact")
  }

}
