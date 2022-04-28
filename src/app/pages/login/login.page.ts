import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

titolo:string="Benvenuti nella pagina di Login";

username:string;

password:string;

clicca(){
  alert(this.username +" "+ this.password);
}

  constructor() { }

  ngOnInit() {
  }

}
