import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-value-accessor-example',
  templateUrl: './value-accessor-example.component.html',
  styleUrls: ['./value-accessor-example.component.scss'],
})
export class ValueAccessorExampleComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      itemName: [null, [Validators.required]],
      isLocked: [{ value: false, disabled: false }],
    });
  }

  onSubmit(): void {
    console.log('this.form', this.form.value);
  }
}
