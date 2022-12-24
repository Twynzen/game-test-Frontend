import { ValidatorFn } from "@angular/forms";

export interface Question {
  label: string;
  name: string;
  validator: any;
  type: 'radio' | 'textarea' | 'text'; // Nueva propiedad para indicar el tipo de pregunta
  options?: { label: string, value: any }[]; // Nueva propiedad para almacenar las opciones del radio button
}
