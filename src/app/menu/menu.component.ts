import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class AppMenu {


}
