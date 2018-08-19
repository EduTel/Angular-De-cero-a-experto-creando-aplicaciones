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
  constructor() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('Nancy', [ Validators.required, Validators.minLength(4), ]),
      lastName: new FormControl(''),
      mail: new FormControl(''),
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
