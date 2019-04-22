import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appDateValidator]'
})
export class DateValidatorDirective {

  constructor() { }
}
export function dateValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    //TODO: why is this called multiple times
    console.log("Validator directive was called with value", control.value);
    let f = control.value;
    let t = new Date("2015-03-25").toISOString().split('T')[0];
    return f >= t ? { 'invalidDate': { value: control.value } } : null;
  };
}
