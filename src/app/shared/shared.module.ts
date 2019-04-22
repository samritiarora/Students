import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateValidatorDirective } from './date-validator.directive';

@NgModule({
  declarations: [DateValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [DateValidatorDirective]
})
export class SharedModule { }
