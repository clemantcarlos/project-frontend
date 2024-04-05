import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServicePersonal } from '../../services/personal/api.service';
import { ApiServiceAlumno } from '../../services/alumno/api.service';
import { ApiServiceRepresentante } from '../../services/representante/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patch-form',
  templateUrl: './patch-form.component.html',
  styleUrl: './patch-form.component.css'
})
export class PatchFormComponent {
  @Input() userType:string=''

  constructor(
    private formBuilder: FormBuilder,
    private Personal: ApiServicePersonal,
    private Alumno: ApiServiceAlumno,
    private Representante: ApiServiceRepresentante,
    private http: HttpClient) { }

  selectTypes:Array<any>=['V','J','E'];
  academicDegrees:any=[
    {id:1,name:"Bachiller"}
  ]
  personalTypes:any=[
    {id:1,name:"Obrero"}
  ]
  biologicalSex: any = [
    { id: 0, name: "Femenino" },
    { id: 1, name: "Masculino" }
  ]

  alumnoForm:any
  personalForm:any
  representanteForm:any
  loding:boolean=false

  ngOnInit(){
    // INITIALIZE PERSONAL FORM
    this.personalForm = this.formBuilder.group({
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
      id_tipo_personal:['',[Validators.required]],
      id_grado_academico:['',[Validators.required]],
    });
    // DEFAULT CEDULA TYPE OPTION
    this.personalForm.controls['cedula_tipo']
    .setValue(this.selectTypes[0]);
    // DEFAULT RIF TYPE OPTION
    this.personalForm.controls['rif_tipo']
    .setValue(this.selectTypes[0]);
    // DEFAULT OPTION ACADEMIC DEGREE
    this.personalForm.controls['id_grado_academico']
    .setValue(this.academicDegrees[0].id);
    // DEFAULT OPTION PERSONAL TYPE
    this.personalForm.controls['id_tipo_personal']
    .setValue(this.personalTypes[0].id);
    
    // INITIALIZE ALUMNO FORM 
    this.alumnoForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      apellido: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      fecha_nacimiento: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      cedula_tipo: [null, [Validators.required]],
      parent_cedula: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      parent_cedula_tipo: [null, [Validators.required]],
      id_sexo: [null, [Validators.required]],
    });
    // DEFAULT CEDULA TYPE OPTION
    this.alumnoForm.controls['cedula_tipo']
      .setValue(this.selectTypes[0]);
    // // DEFAULT PARENT CEDULA TYPE OPTION
    this.alumnoForm.controls['parent_cedula_tipo']
      .setValue(this.selectTypes[0]);
    // // DEFAULT BIOLOGICAL SEX TYPE OPTION
    this.alumnoForm.controls['id_sexo']
      .setValue(this.biologicalSex[0].id);

    this.representanteForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      apellido: ['', [Validators.required, Validators.maxLength(255)]],
      direccion: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      fecha_nacimiento: ['', [Validators.required]],
      telefono:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      cedula: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      cedula_tipo: [null, [Validators.required]],
    });
      // DEFAULT CEDULA TYPE OPTION
      this.representanteForm.controls['cedula_tipo']
        .setValue(this.selectTypes[0]);
  }

  onSubmit(event:any){

    this.loding=true
    // this.sendData(this.userType)
  }


  // GETTERS
  get personalName() {return this.personalForm.get('nombre')}
  get personalLastName() {return this.personalForm.get('apellido')}
  get personalCedula() {return this.personalForm.get('cedula')}
  get personalRif() {return this.personalForm.get('rif')}
  get personalEmail() {return this.personalForm.get('email')}
  get personalBirthday() {return this.personalForm.get('fecha_nacimiento')}
  get personalAdress() {return this.personalForm.get('direccion')}
  get personalPhoneNumber() {return this.personalForm.get('telefono')}
  get personalCedulaType(){return this.personalForm.get('cedula_tipo')}
  get personalRifType(){return this.personalForm.get('rif_tipo')}
  get personalType(){return this.personalForm.get('id_tipo_personal')}
  get academicDegree(){return this.personalForm.get('id_grado_academico')}
  
  get alumnoName() { return this.alumnoForm.get('nombre') }
  get alumnoLastName() { return this.alumnoForm.get('apellido') }
  get alumnoEmail() { return this.alumnoForm.get('email') }
  get alumnoBirthday() { return this.alumnoForm.get('fecha_nacimiento') }
  get alumnoCedula() { return this.alumnoForm.get('cedula') }
  get alumnoCedulaType() { return this.alumnoForm.get('cedula_tipo') }
  get alumnoParentCedula(){return this.alumnoForm.get('parent_cedula')}
  get alumnoParentCedulaType(){return this.alumnoForm.get('parent_cedula_tipo')}
  get alumnoBiologicalSex(){return this.alumnoForm.get('id_sexo')} 

  get representanteName() { return this.representanteForm.get('nombre') }
  get representanteLastName() { return this.representanteForm.get('apellido') }
  get representanteEmail() { return this.representanteForm.get('email') }
  get representanteBirthday() { return this.representanteForm.get('fecha_nacimiento') }
  get representanteCedula() { return this.representanteForm.get('cedula') }
  get representanteCedulaType() { return this.representanteForm.get('cedula_tipo') }
  get representantePhoneNumber() { return this.representanteForm.get('telefono') }
  get representanteAdress() { return this.representanteForm.get('direccion') }

}
