import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-personal',
  templateUrl: './home-personal.component.html',
  styleUrl: './home-personal.component.css'
})
export class HomePersonalComponent {

  constructor(private formBuilder:FormBuilder){}

 createUserForm:any
 deleteUserForm:any
 
 selectedUserType:string='personal'

 userTypes:Array<string>=[
  'personal',
  'alumno'
]

 ngOnInit(){
  this.createUserForm= new FormGroup({
    userType: new FormControl(null)
  })
  
  this.createUserForm.controls['userType'].setValue(this.userTypes[0],{onlyself:true})
 }

 get userType():string{
  return this.createUserForm.get('userType').value
}

 onSubmit(event:any){
  // console.log(event);
  console.log(this.createUserForm.value)
 }
 selectHandler(){
  this.selectedUserType=this.userType
 }
}
