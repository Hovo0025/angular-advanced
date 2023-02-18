import { NgModule } from '@angular/core';
import { ValueAccessorExampleComponent } from './value-accessor-example/value-accessor-example.component';
import { LockInputComponent } from './lock-input/lock-input.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [ValueAccessorExampleComponent, LockInputComponent],
  exports: [ValueAccessorExampleComponent],
})
export class ComplexFormControlModule {}
