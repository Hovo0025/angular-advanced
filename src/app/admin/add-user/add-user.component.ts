import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SaveDataInterface } from '../../shared/interfaces/save-data.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit, SaveDataInterface {
  addUserForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name: [''],
      email: [''],
    });
  }

  isDataSaved(): boolean {
    return this.addUserForm.dirty;
  }
}
