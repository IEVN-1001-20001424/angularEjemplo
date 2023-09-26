import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1:string='';
  num2:string='';

  resultado:number=0;

  name1:string='';

  operator(op:string){
    this.name1 = op;
    return;
  }

  calcular(){
    switch(this.name1){
      case 'plus': this.sumar(); break;
      case 'minus': this.restar(); break;
      case 'times_by': this.multiplicar(); break;
      case 'divided_by': this.dividir(); break;
    }
  }

  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }
  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2);
  }
  multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2);
  }
  dividir():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2);
  }
}
