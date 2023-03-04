import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SaveDataInterface } from '../../shared/interfaces/save-data.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, SaveDataInterface {
  addProductForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      name: [],
      quantity: [],
    });
  }

  isDataSaved(): boolean {
    return this.addProductForm.dirty;
  }
}
