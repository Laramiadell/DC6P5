import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'randomNumber',
  templateUrl: './randmon-number.component.html',
  styleUrls: ['./randmon-number.component.css']
})
export class RandmonNumberComponent {


  constructor() {
    for (var x=0; x<6; x++){
      this.rnd.push(Math.floor(Math.random()*46)+1)
    }
  }

  rnd:any = []
  selected:any

  buttonSelect(num: number){
    this.selected = num
  }
}

