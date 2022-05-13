import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

titolo:string="Benvenuti nella pagina di Login";


 mioForm:FormGroup;

 disattiva:boolean=true;

 constructor(private fb:FormBuilder){
  this.mioForm = fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required],
    })
 }

controllo():void{

if (this.mioForm.get("username").valid && this.mioForm.get("password").valid)
 this.disattiva=false;
else{
  this.disattiva=true;
}

}

clicca():void{
 if(!this.disattiva)
  alert( this.mioForm.controls['username'].value + " " + this.mioForm.controls['password'].value );
}

  
  

  ngOnInit() {
  }

}
