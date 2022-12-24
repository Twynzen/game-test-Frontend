import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/Interfaces/questions.interface';

@Component({
  selector: 'app-butler-form',
  templateUrl: './butler-form.component.html',
  styleUrls: ['./butler-form.component.scss']
})
export class ButlerFormComponent {
  formPersonData: FormGroup;
  currentQuestion = 0;

 questions: Question[] = [
    {
      label: '¿Cómo deseas llamarme?',
      name: 'nameIa',
      validator: Validators.required,
      type: 'text',
    },
    {
      label: '¿Quién eres? Dime como te gustaría que te llamara',
      name: 'nameUser',
      validator: Validators.required,
      type: 'text',
    },
    {
      label: '¿Cuál es tu edad?',
      name: 'age',
      validator: Validators.required,
      type: 'text',
    },
    {
      label: '¿Cuál es tu ocupación o profesión?',
      name: 'occupation',
      validator: Validators.required,
      type: 'text',
    },
   {
     label: '¿Te gusta más hacer actividades al aire libre o en interiores? ¿Qué tipo de actividades te gusta realizar en tu tiempo libre?',
     name: 'freeTimeActivities',
     validator: Validators.required,
     type: 'radio',
     options: [
       { label: 'Al aire libre', value: 'outdoor' },
       { label: 'En interiores', value: 'indoor' }
     ]
   },
  ];

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
