import { Component } from '@angular/core';
import { Cheif } from '../../models/cheif';
import { Ichef } from '../../models/chiefInterface';



@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css'
})
export class ChefsComponent {
chefs:Ichef[]=Cheif;
}
