import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookTableComponent } from './components/book-table/book-table.component';
import { GallaryComponent } from './components/gallary/gallary.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'menu',component:MenuComponent},
  {path:'chefs',component:ChefsComponent},
  {path:'contact',component:ContactComponent},
  {path:'book-table',component:BookTableComponent},
  {path:'gallary',component:GallaryComponent},
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'**',component:NotFoundComponent},
];
