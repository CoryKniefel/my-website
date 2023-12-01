import { Component } from '@angular/core';
import {AppMenu} from "../menu/menu.component";
@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [AppMenu]
})
export class HeaderComponent {

}
