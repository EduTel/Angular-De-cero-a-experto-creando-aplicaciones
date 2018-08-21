import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {
  // name = new FormControl('');
  profileForm: FormGroup;
  profileForm_O: any   = {
    nombreCompleto: {
      firstName: 'Nancy',
      lastName: ''
    },
    mail: 'example@outlook.com'
  };
  constructor() {
    console.warn(this.profileForm_O);
    this.profileForm = new FormGroup({
      nombreCompleto: new FormGroup(
        {
          firstName: new FormControl('', [ Validators.required, Validators.minLength(4), ]),
          lastName: new FormControl('', [Validators.required]),
        }
      ),
      mail: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    });
    this.profileForm.setValue(this.profileForm_O);
  }
  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm);
    // console.warn(this.profileForm.controls.nombreCompleto.value.firstName);
    // console.warn(this.profileForm.value);
  }
  reset() {
    this.profileForm.reset(this.profileForm_O);
    this.profileForm.get('nombreCompleto.firstName').setValue('Nancy_');
  }

}
