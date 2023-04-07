import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidate]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidateDirective,
    multi: true
  }]
})
export class EmailValidateDirective implements Validator {

  isEmail(email?: string) {
    if (email === null || email === undefined) return false
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(email)
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (!this.isEmail(control.value)) {
      return { 'emailValidateInvalid': true };
    }
    return null;
  }
}
