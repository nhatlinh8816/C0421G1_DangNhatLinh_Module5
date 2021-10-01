import { Component, OnInit } from '@angular/core';
export interface ICaculator {
  firstNum: number;
  secondNum: number;
  operator: string;
}



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  caculator: ICaculator = {
    firstNum: null,
    secondNum: null,
    operator: 'add',

  };
  constructor() { }

  ngOnInit(): void {
  }

  getFirstNum(value: any) {
    this.caculator.firstNum = value;
  }

  getSecondNum(value: any) {
    this.caculator.secondNum = value;
  }

  getOperator(value: any) {
    this.caculator.operator = value;
  }
  getResult(firstNum: number, secondNum: number, operator: string){
    this.caculator.firstNum = firstNum;
    this.caculator.secondNum = secondNum;
    this.caculator.operator = operator;
    switch (operator) {
      case 'add':
        return  Number(firstNum) + Number(secondNum);
        break;
      case 'sub':
        return firstNum - secondNum;
        break;
      case 'multi':
        return firstNum * secondNum;
        break;
      case 'divide':
        return firstNum / secondNum;
        break;
    }
  }
}
