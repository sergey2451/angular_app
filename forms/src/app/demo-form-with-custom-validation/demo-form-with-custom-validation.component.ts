import { Component } from '@angular/core';
import { 
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true}
  }
  return {}
}

@Component({
  selector: 'app-demo-form-with-custom-validation',
  templateUrl: './demo-form-with-custom-validation.component.html',
})
export class DemoFormWithCustomValidationComponent {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, skuValidator])]
    });

    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
