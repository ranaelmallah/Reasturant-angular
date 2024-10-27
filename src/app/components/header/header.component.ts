import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { Router ,RouterLink} from '@angular/router';
import { routes } from '../../app.routes';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
