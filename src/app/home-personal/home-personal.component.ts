import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-personal',
  templateUrl: './home-personal.component.html',
  styleUrl: './home-personal.component.css'
})
export class HomePersonalComponent {

  constructor(private formBuilder: FormBuilder) { }

  createUserForm: any
  patchUserForm: any

  selectedUserType: string = 'personal'
  patchSelectedUserType: string = 'personal'

  userTypes: Array<string> = [
    'personal',
    'alumno',
    'representante'
  ]

  ngOnInit() {
    this.createUserForm = new FormGroup({
      userType: new FormControl(null)
    })
    this.patchUserForm = new FormGroup({
      userType: new FormControl(null)
    })

    this.createUserForm.controls['userType'].setValue(this.userTypes[0], { onlyself: true })
    this.patchUserForm.controls['userType'].setValue(this.userTypes[0], { onlyself: true })
  }

  get userType(): string {
    return this.createUserForm.get('userType').value
  }
  get userTypePatch(): string {
    return this.patchUserForm.get('userType').value
  }

  onSubmit(event: any) {
    console.log(this.createUserForm.value)
  }

  selectHandler() {
    this.selectedUserType = this.userType
  }
  patchSelectHandler() {
    this.patchSelectedUserType = this.userTypePatch
    console.log(this.userType);
  }
}
