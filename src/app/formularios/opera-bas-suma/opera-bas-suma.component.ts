import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas-suma',
  templateUrl: './opera-bas-suma.component.html',
  styleUrls: ['./opera-bas-suma.component.css']
})
export class OperaBasSumaComponent {

  num1:string='';
  num2:string='';

  res:number=0;

  sumar():void{
    this.res=parseInt(this.num1)+parseInt(this.num2);
  }
}
