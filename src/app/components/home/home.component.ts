import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { MenuComponent } from "../menu/menu.component";
import { ChefsComponent } from "../chefs/chefs.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { Starters } from '../../models/menu';
import { BookTableComponent } from "../book-table/book-table.component";
import { GallaryComponent } from "../gallary/gallary.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeaderComponent, AboutComponent, MenuComponent, ChefsComponent, ContactComponent, FooterComponent, BookTableComponent, GallaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  starter= Starters ;

}
