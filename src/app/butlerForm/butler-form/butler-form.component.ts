import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-butler-form',
  templateUrl: './butler-form.component.html',
  styleUrls: ['./butler-form.component.scss']
})
export class ButlerFormComponent {

  formPersonData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formPersonData = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      appearance: ['', Validators.required],
      personality: ['', Validators.required],
      interests: ['', Validators.required],
      skills: ['', Validators.required]
    });
  }
  onSubmit(){
    console.log(this.formPersonData.value,"data");

  }
}
