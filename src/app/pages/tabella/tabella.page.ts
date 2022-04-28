import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.page.html',
  styleUrls: ['./tabella.page.scss'],
})
export class TabellaPage implements OnInit {

c:number;
f:number;
km:number;
mi:number;

  constructor() { }

  convertitore(unità:string):void{
    if (unità==="c"){
    this.f=this.arrotonda(this.c * 9/5) +32;
    }else if (unità==="f"){
    this.c=this.arrotonda((this.f -32)* 5/9);
    }else if (unità==="km"){
    this.mi =this.arrotonda(this.km/1.609);
    }else{
    this.km =this.arrotonda (this.mi * 1.609);
    }
   }
   arrotonda(risultato:number):number{
     return +risultato.toPrecision(3);
   }


  ngOnInit() {
  }

}
