import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionsFamiliarity } from './questions.const';

@Component({
  selector: 'app-butler-form',
  templateUrl: './butler-form.component.html',
  styleUrls: ['./butler-form.component.scss']
})
export class ButlerFormComponent {
  formPersonData: FormGroup;
  currentQuestion = 0;
  questions = QuestionsFamiliarity;


  constructor(private formBuilder: FormBuilder) {
    this.formPersonData = this.formBuilder.group({
      [this.questions[this.currentQuestion].name]: ['', this.questions[this.currentQuestion].validator]
    });
  }

  onNext() {
    this.currentQuestion++;
    this.formPersonData.addControl(
      this.questions[this.currentQuestion].name,
      new FormControl('', this.questions[this.currentQuestion].validator)
    );
  }
  onBack() {
    this.formPersonData.removeControl(this.questions[this.currentQuestion].name);
    this.currentQuestion--;
  }
  onSubmit(){

  }
}
