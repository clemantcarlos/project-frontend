import { Component, Input } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent {
  @Input() userType = '';

  constructor(private formBuilder:FormBuilder){}

  selectTypes:Array<any>=['V','J','E'];

  personalForm = this.formBuilder.group({
    nombre:['',[Validators.required, Validators.maxLength(255)]],
    apellido:['',[Validators.required, Validators.maxLength(255)]],
    direccion:['',[Validators.required, Validators.maxLength(255)]],
    email:['',[Validators.required,Validators.email, Validators.maxLength(255)]],
    fecha_nacimiento:['',[Validators.required]],
    cedula:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    cedula_tipo:[null,[Validators.required]],
    telefono:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    rif:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    rif_tipo:['',[Validators.required]],
    id_tipo_personal:['',[Validators.required], Validators.pattern("^[0-9]*$")],
    id_grado_academico:['',[Validators.required],Validators.pattern("^[0-9]*$")],
  });



  ngOnInit(){
    this.personalForm.controls['cedula_tipo'].setValue(this.selectTypes[0])
    this.personalForm.controls['rif_tipo'].setValue(this.selectTypes[0])
    
    // console.log(this.userType);
  }
  onSubmit(event:any){

    console.log(this.personalForm.value);
    
  }
}
