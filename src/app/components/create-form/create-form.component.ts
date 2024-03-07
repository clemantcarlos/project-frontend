import { Component, Input } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { academicDegree } from '../../interfaces/academicDegree';
import { personalType } from '../../interfaces/personalType';
import { ApiServicePersonal } from '../../services/personal/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})



export class CreateFormComponent {
  @Input() userType = '';

  constructor(private formBuilder:FormBuilder,private Personal:ApiServicePersonal,private http:HttpClient){}

  selectTypes:Array<any>=['V','J','E'];
  academicDegrees:academicDegree[]=[
    {id:1,name:"Bachiller"}
  ]
  personalTypes:personalType[]=[
    {id:1,name:"Obrero"}
  ]

  personalForm:any
  loding:boolean=false

  ngOnInit(){
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
  }
  onSubmit(event:any){

    this.loding=true
    const formatedDate=new Date(this.personalBirthday.value).toISOString()

    // DATA
    const personal = {
      nombre: this.name.value,
      apellido: this.lastName.value,
      direccion: this.adress.value,
      email: this.email.value,
      fecha_nacimiento: formatedDate,
      cedula: this.cedula.value,
      cedula_tipo: this.cedulaType.value,
      telefono: this.phoneNumber.value,
      rif: this.rif.value,
      rif_tipo: this.rifType.value,
      id_tipo_personal: this.personalType.value,
      id_grado_academico: this.academicDegree.value
    }
    // POST PERSONAL
    this.Personal.post(personal)
    .subscribe(
    data=>{
      if(data.message){
        return Swal.fire({
          title: 'No se pudo crear el usuario',
          text: data.message,
          icon: 'warning'
        })
      }
      console.log(data);
      return Swal.fire({
        title: "Usuario creado",
        text:`
          Nombre: ${data.nombre},
          Apellido: ${data.apellido},
          Cedula: ${data.cedula_tipo}-${data.cedula}
        `,
        icon: "success"
      });
    },
    error=>{
      if(!error.ok){
        return Swal.fire({
          icon: "error",
          title: 'No se pudo conectar con el servidor',
        })
      }
      return
    })
    .add(()=>{
      this.loding=false
    });
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
}
// import { Component, Input } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { academicDegree } from '../../interfaces/academicDegree';
// import { personalType } from '../../interfaces/personalType';
// import { ApiServicePersonal } from '../../services/personal/api.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import Swal from 'sweetalert2';
// @Component({
//   selector: 'app-create-form',
//   templateUrl: './create-form.component.html',
//   styleUrl: './create-form.component.css'
// })

// export class CreateFormComponent {
//   @Input() userType = '';

//   constructor(private formBuilder: FormBuilder, private Personal: ApiServicePersonal, private http: HttpClient) { }

//   selectTypes: Array<any> = ['V', 'J', 'E'];
//   academicDegrees: academicDegree[] = [
//     { id: 1, name: "Bachiller" }
//   ]
//   personalTypes: personalType[] = [
//     { id: 1, name: "Obrero" }
//   ]
//   biologicalSex: personalType[] = [
//     { id: 0, name: "Femenino" },
//     { id: 1, name: "Masculino" }
//   ]

//   personalForm: any
//   alumnoForm: any
//   loding: boolean = false

//   ngOnInit() {
//     // nombre:string;
//     // apelliddo:string;
//     // direccion:string;
//     // email:string;
//     // fecha_nacimiento:string;
//     // cedula:number;
//     // cedula_tipo:string;
//     // parent_cedula:number;
//     // parent_cedula_tipo:string;
//     // telefono:number;
//     // id_sexo:number;

//     // INITIALIZE PERSONAL FORM
//     this.alumnoForm = this.formBuilder.group({
//       nombre: ['', [Validators.required, Validators.maxLength(255)]],
//       apellido: ['', [Validators.required, Validators.maxLength(255)]],
//       direccion: ['', [Validators.required, Validators.maxLength(255)]],
//       email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
//       fecha_nacimiento: ['', [Validators.required]],
//       cedula: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
//       cedula_tipo: [null, [Validators.required]],
//       parent_cedula: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
//       parent_cedula_tipo: [null, [Validators.required]],
//       telefono: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
//       id_sexo: [null, [Validators.required]],
//     });
//     // DEFAULT CEDULA TYPE OPTION
//     this.alumnoForm.controls['cedula_tipo']
//       .setValue(this.selectTypes[0]);
//     // DEFAULT PARENT CEDULA TYPE OPTION
//     this.alumnoForm.controls['parent_cedula_tipo']
//       .setValue(this.selectTypes[0]);
//     // DEFAULT BIOLOGICAL SEX TYPE OPTION
//     this.alumnoForm.controls['id_sexo']
//       .setValue(this.selectTypes[0]);
//   }
  
//   onSubmit(event: any) {

//     this.loding = true

//     if (this.userType === 'personal') {
//       const formatedDate = new Date(this.personalBirthday.value).toISOString()
//       // DATA
//       const personal = {
//         nombre: this.personalName.value,
//         apellido: this.personalLastName.value,
//         direccion: this.personalAdress.value,
//         email: this.personalEmail.value,
//         fecha_nacimiento: formatedDate,
//         cedula: this.personalCedula.value,
//         cedula_tipo: this.personalCedulaType.value,
//         telefono: this.personalPhoneNumber.value,
//         rif: this.personalRif.value,
//         rif_tipo: this.personalRifType.value,
//         id_tipo_personal: this.personalType.value,
//         id_grado_academico: this.academicDegree.value
//       }
//       // POST PERSONAL
//       this.Personal.post(personal)
//         .subscribe(
//           data => {
//             if (data.message) {
//               return Swal.fire({
//                 title: 'No se pudo crear el usuario',
//                 text: data.message,
//                 icon: 'warning'
//               })
//             }
//             return Swal.fire({
//               title: "Usuario creado",
//               text: `
//                 Nombre: ${data.nombre},
//                 Apellido: ${data.apellido},
//                 Cedula: ${data.cedula_tipo}-${data.cedula}
//               `,
//               icon: "success"
//             });
//           },
//           error => {
//             if (!error.ok) {
//               return Swal.fire({
//                 icon: "error",
//                 title: 'No se pudo conectar con el servidor',
//               })
//             }
//             return
//           })
//         .add(() => {
//           this.loding = false
//         });
//     }
//     if (this.userType === 'alumno') {
//       const formatedDate = new Date(this.personalBirthday.value).toISOString()
//       // DATA
//       const personal = {
//         nombre: this.personalName.value,
//         apellido: this.personalLastName.value,
//         direccion: this.personalAdress.value,
//         email: this.personalEmail.value,
//         fecha_nacimiento: formatedDate,
//         cedula: this.personalCedula.value,
//         cedula_tipo: this.personalCedulaType.value,
//         telefono: this.personalPhoneNumber.value,
//         rif: this.personalRif.value,
//         rif_tipo: this.personalRifType.value,
//         id_tipo_personal: this.personalType.value,
//         id_grado_academico: this.academicDegree.value
//       }
//       // POST PERSONAL
//       this.Personal.post(personal)
//         .subscribe(
//           data => {
//             if (data.message) {
//               return Swal.fire({
//                 title: 'No se pudo crear el usuario',
//                 text: data.message,
//                 icon: 'warning'
//               })
//             }
//             return Swal.fire({
//               title: "Usuario creado",
//               text: `
//                 Nombre: ${data.nombre},
//                 Apellido: ${data.apellido},
//                 Cedula: ${data.cedula_tipo}-${data.cedula}
//               `,
//               icon: "success"
//             });
//           },
//           error => {
//             if (!error.ok) {
//               return Swal.fire({
//                 icon: "error",
//                 title: 'No se pudo conectar con el servidor',
//               })
//             }
//             return
//           })
//         .add(() => {
//           this.loding = false
//         });
//     }
//   }

//   // PERSONAL GETTERS
//   get personalName() { return this.personalForm.get('nombre') }
//   get personalLastName() { return this.personalForm.get('apellido') }
//   get personalCedula() { return this.personalForm.get('cedula') }
//   get personalRif() { return this.personalForm.get('rif') }
//   get personalEmail() { return this.personalForm.get('email') }
//   get personalBirthday() { return this.personalForm.get('fecha_nacimiento') }
//   get personalAdress() { return this.personalForm.get('direccion') }
//   get personalPhoneNumber() { return this.personalForm.get('telefono') }
//   get personalCedulaType() { return this.personalForm.get('cedula_tipo') }
//   get personalRifType() { return this.personalForm.get('rif_tipo') }
//   get personalType() { return this.personalForm.get('id_tipo_personal') }
//   get academicDegree() { return this.personalForm.get('id_grado_academico') }
//   // PERSONAL GETTERS
//   get alumnoName() { return this.alumnoForm.get('nombre') }
//   get alumnoLastName() { return this.alumnoForm.get('apellido') }
//   get alumnoEmail() { return this.alumnoForm.get('email') }
//   get alumnoBirthday() { return this.alumnoForm.get('fecha_nacimiento') }
//   get alumnoPhoneNumber() { return this.alumnoForm.get('telefono') }
//   get alumnoCedula() { return this.alumnoForm.get('cedula') }
//   get alumnoCedulaType() { return this.alumnoForm.get('cedula_tipo') }
//   get alumnoParentCedula(){return this.alumnoForm.get('parent_cedula')}
//   get alumnoParentCedulaType(){return this.alumnoForm.get('parent_cedula_tipo')}
//   get alumnoBiologicalSex(){return this.alumnoForm.get('sexo')}
// }
