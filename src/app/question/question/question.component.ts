import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  dead1: boolean = false;
  dead2: boolean = false;
  dead3: boolean = false;


  dead(num:number){
    if (num===1) {
      this.dead1 = true;
      this.dead2 = false;
      this.dead3 = false;
    }else if (num===2) {
      this.dead2 = true;
      this.dead1 = false;
      this.dead3 = false;
    }else  if (num===3) {
      this.dead3 = true;
      this.dead2 = false;
      this.dead1 = false;
    }
  }

}
