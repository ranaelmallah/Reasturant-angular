import { Component, Input } from '@angular/core';
import { Starters ,Salads ,Specialty} from '../../models/menu'
import {Menu} from '../../models/menuInterfaces'

import{MenuService}from '../../menu.service'
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
@Input() startersmenu !:Menu
 starters= Starters ;
 Salads=Salads;
 Specialties=Specialty;
 starter:boolean=true;
 Salad:boolean=true;
 Specialty:boolean=true;
 onAll(){
  this.starter=true;
  this.Salad=true;
  this.Specialty=true;
}
onStarters(){
  this.starter=true;
  this.Salad=false;
  this.Specialty=false;
}
onSalads(){

  this.Salad=true;
   this.starter=false;
  this.Specialty=false;
}
onSpecialty(){
  this.Specialty=true;
   this.starter=false;
  this.Salad=false;

}

}
