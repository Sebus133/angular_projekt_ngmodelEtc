import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.css']
})
export class FormularzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string="";
  email:string="";
  produkt:string="";
  ilosc:number=0;
  wiadomosc:string="";
  submit(){
    console.log('submit dziaa');
  }

}
