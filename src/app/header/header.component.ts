import {Component} from '@angular/core';
import {AppMenu} from "../menu/menu.component";
import {MatToolbarModule} from '@angular/material/toolbar'

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [AppMenu, MatToolbarModule]
})
export class HeaderComponent {

}
