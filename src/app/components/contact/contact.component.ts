import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Icontact } from '../../models/contactinterface';
import { ContactInfo } from '../../models/contactinfo';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private formbulder:FormBuilder){
this.intinForm()
  }
contactInfo:Icontact[]=ContactInfo

  form!:FormGroup
  isbooked:boolean=false
  private intinForm():void{
   this.form=this.formbulder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      subject:['',[Validators.required]],
      message:['',[Validators.required]],

    })
  }

  sendMessage(){
    this.isbooked=true
    this.form.reset()
    setTimeout(() => {
      this.isbooked=false

    }, 2000);
  }
}
