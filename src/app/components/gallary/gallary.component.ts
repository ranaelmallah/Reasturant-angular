import { Component } from '@angular/core';
import { Gallary } from '../../models/gallary';
import { IGallary } from '../../models/gallaryInterface';



@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
  gallary:IGallary[] =Gallary

}
