import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacje',
  templateUrl: './informacje.component.html',
  styleUrls: ['./informacje.component.css']
})
export class InformacjeComponent {

imie: string="filip";
nazwisko: string="rusztowicz";
owoce: string[]=["japko","czeresnie","kiwi"]
}
