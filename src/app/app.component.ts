import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }
  noOfTestCases: any;
  peopleArr: any;
  costArr = [];
  cost: any;
  ans: any;
  noOfPeople: any;
  testCaseArr = [];
  showSubmit: boolean = false;
  showAns: boolean =false;
  ngOnInit() {

  }
  setNoOfTestCases(){
    this.testCaseArr = [];
    for (var i = 1; i <= this.noOfTestCases; i++) {
      this.testCaseArr.push(i);
    }
  }
  setPeopleArr(event){
    this.noOfPeople = parseInt(event.target.value);
    this.showSubmit = false;
    this.showAns =false;
  }
  setNoOfPeople() {
    this.peopleArr = [];
    this.showSubmit =true;
    for (var i = 1; i <= this.noOfPeople; i++) {
      this.peopleArr.push(i);
    }
    for(var a=0; a<this.peopleArr.length;a++){
      (document.getElementById("costId" + a)as HTMLInputElement).value = "";
       }
      
  }
  setCost(event) {
    this.costArr.push(event.target.value);

  }
  calculateCost() {
      var testCase = this.noOfTestCases
    
      for(var a=0; a<testCase;a++)
      {
        this.costArr.sort(function(a, b){return a - b});
        var res=0
        while(this.costArr.length>3)
        {
        //  ans+=min(v[0]*2+v[n-1]+v[n-2], v[0]+v[1]*2+v[n-1]);
          var op1 = (parseInt(this.costArr[0]))*2 +  parseInt(this.costArr[this.costArr.length-1])+ parseInt(this.costArr[this.costArr.length-2]);
          var op2 = parseInt(this.costArr[0]) + (parseInt(this.costArr[1]))*2 + parseInt(this.costArr[this.costArr.length-1]);
          res += Math.min(op1,op2);
          this.costArr.length -= 2;
         // console.log("1",res);
        }
        if(this.costArr.length==3){
        res += parseInt(this.costArr[0])+parseInt(this.costArr[1])+parseInt(this.costArr[2]);
       // console.log("2",res);
        }
			else if(this.costArr.length==2){
        res += parseInt(this.costArr[1]);
       // console.log("3",res);
      }
			else{
        res += parseInt(this.costArr[0]);
       // console.log("4",res);
      }
    //console.log(res);
    this.ans = res;
    this.showAns = true;
      }
    }
  }

