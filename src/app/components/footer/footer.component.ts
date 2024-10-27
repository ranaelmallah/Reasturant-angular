import { Component } from '@angular/core';
import { Icontact } from '../../models/contactinterface';
import { ContactInfo } from '../../models/contactinfo';
import { ReactiveFormsModule,FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contactInfo:Icontact[]=ContactInfo
  constructor(private formbuilder:FormBuilder){

  }
  isvalid=false
  form=this.formbuilder.group({
    email:['',Validators.required,Validators.email]
  })
  submit(){
    this.isvalid=true
this.form.reset()
    setTimeout(() => {
      this.isvalid=false

    }, 2000);

  }
}
