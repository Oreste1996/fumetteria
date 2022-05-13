import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {

  mioForm: FormGroup;

  disattiva:boolean=true;

  constructor(private fb: FormBuilder) {
    this.mioForm = fb.group({
      name:['',Validators.required] ,
      surname:['',Validators.required] ,
      email:['',Validators.required] ,
      password:['',Validators.required] ,
    })
  }

  controllo():void{

    if (this.mioForm.get("name").valid && this.mioForm.get("surname").valid && this.mioForm.get("email").valid && this.mioForm.get("password").valid )
     this.disattiva=false;
    else{
      this.disattiva=true;
    }
    
    }

    clicca():void{
      if(!this.disattiva)
       alert( this.mioForm.controls['name'].value + " " + this.mioForm.controls['surname'].value + " " +  this.mioForm.controls['email'].value + " " + this.mioForm.controls['password'].value);
     }

  ngOnInit(){}

}