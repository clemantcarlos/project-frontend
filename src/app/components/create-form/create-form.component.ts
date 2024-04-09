import { Component, Input } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { academicDegree } from '../../interfaces/academicDegree';
import { ApiServicePersonal } from '../../services/personal/api.service';
import { HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import { ApiServiceAlumno } from '../../services/alumno/api.service';
import { ApiServiceRepresentante } from '../../services/representante/api.service';
import { ConfigService } from '../../services/config/config.service';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})

export class CreateFormComponent {
  @Input() userType = '';

  constructor(
    private formBuilder:FormBuilder,
    private Config:ConfigService,
    private Personal:ApiServicePersonal,
    private Alumno:ApiServiceAlumno,
    private Representante:ApiServiceRepresentante,
    private http:HttpClient){}

  selectTypes:Array<any>=['V','CE','J','E'];
  
  turnoList:any;
  gradoEscolarList:any;
  seccionList:any;
  academicDegrees:any;
  personalTypes:any;
  biologicalSex:any;

  alumnoForm:any
  personalForm:any
  representanteForm:any
  loding:boolean=false

  ngOnInit(){
    // SELECT LOAD
    this.Config.getTurno().subscribe(resp=>{
      this.turnoList=resp
    })
    this.Config.getGradoEscolar().subscribe(resp=>{
      this.gradoEscolarList=resp
    })
    this.Config.getSeccion().subscribe(resp=>{
      this.seccionList=resp
    })
    this.Config.getTipoPersonal().subscribe(resp=>{
      this.personalTypes=resp
    })
    this.Config.getGradoAcademico().subscribe(resp=>{
      this.academicDegrees=resp
    })
    this.Config.getTurno().subscribe(resp=>{
      this.turnoList=resp
    })
    this.Config.getGenero().subscribe(resp=>{
      this.biologicalSex=resp
    })


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
      id_turno:['',[Validators.required]],
    });
    // DEFAULT CEDULA TYPE OPTION
    this.personalForm.controls['cedula_tipo']
    .setValue(this.selectTypes[0]);
    // DEFAULT RIF TYPE OPTION
    this.personalForm.controls['rif_tipo']
    .setValue(this.selectTypes[0]);
 
    
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
      id_turno: [null, [Validators.required]],
      id_seccion: [null, [Validators.required]],
      id_grado_escolar: [null, [Validators.required]],
    });
    // DEFAULT CEDULA TYPE OPTION
    this.alumnoForm.controls['cedula_tipo']
      .setValue(this.selectTypes[0]);
    // DEFAULT PARENT CEDULA TYPE OPTION
    this.alumnoForm.controls['parent_cedula_tipo']
      .setValue(this.selectTypes[0]);
   

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
    this.sendData(this.userType)
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
  get personalTurno(){return this.personalForm.get('id_turno')}
  
  get alumnoName() { return this.alumnoForm.get('nombre') }
  get alumnoLastName() { return this.alumnoForm.get('apellido') }
  get alumnoEmail() { return this.alumnoForm.get('email') }
  get alumnoBirthday() { return this.alumnoForm.get('fecha_nacimiento') }
  get alumnoCedula() { return this.alumnoForm.get('cedula') }
  get alumnoCedulaType() { return this.alumnoForm.get('cedula_tipo') }
  get alumnoParentCedula(){return this.alumnoForm.get('parent_cedula')}
  get alumnoParentCedulaType(){return this.alumnoForm.get('parent_cedula_tipo')}
  get alumnoBiologicalSex(){return this.alumnoForm.get('id_sexo')} 
  get alumnoTurno(){return this.alumnoForm.get('id_turno')} 
  get alumnoSeccion(){return this.alumnoForm.get('id_seccion')} 
  get alumnoGradoEscolar(){return this.alumnoForm.get('id_grado_escolar')} 
  

  get representanteName() { return this.representanteForm.get('nombre') }
  get representanteLastName() { return this.representanteForm.get('apellido') }
  get representanteEmail() { return this.representanteForm.get('email') }
  get representanteBirthday() { return this.representanteForm.get('fecha_nacimiento') }
  get representanteCedula() { return this.representanteForm.get('cedula') }
  get representanteCedulaType() { return this.representanteForm.get('cedula_tipo') }
  get representantePhoneNumber() { return this.representanteForm.get('telefono') }
  get representanteAdress() { return this.representanteForm.get('direccion') }


  sendData(type:string){ 

    if(type==='personal'){
      const personalFormatedDate=new Date(this.personalBirthday.value).toISOString()
      // DATA
      const personal = {
        nombre: this.personalName.value,
        apellido: this.personalLastName.value,
        direccion: this.personalAdress.value,
        email: this.personalEmail.value,
        fecha_nacimiento: personalFormatedDate,
        cedula: this.personalCedula.value,
        cedula_tipo: this.personalCedulaType.value,
        telefono: this.personalPhoneNumber.value,
        rif: this.personalRif.value,
        rif_tipo: this.personalRifType.value,
        id_tipo_personal: this.personalType.value,
        id_grado_academico: this.academicDegree.value,
        id_turno:this.personalTurno.value
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
    if(type==='alumno'){
      const alumnoFormatedDate=new Date(this.alumnoBirthday.value).toISOString()
      // DATA
      const alumno = {
        nombre: this.alumnoName.value,
        apellido: this.alumnoLastName.value,
        email: this.alumnoEmail.value,
        fecha_nacimiento: alumnoFormatedDate,
        cedula: this.alumnoCedula.value,
        cedula_tipo: this.alumnoCedulaType.value,
        parent_cedula: this.alumnoParentCedula.value,
        parent_cedula_tipo: this.alumnoParentCedulaType.value,
        id_sexo:this.alumnoBiologicalSex.value,
        id_turno:this.alumnoTurno.value,
        id_seccion:this.alumnoSeccion.value,
        id_grado_escolar:this.alumnoGradoEscolar.value
      }
      // POST ALUMNO
      this.Alumno.post(alumno)
      .subscribe(
      data=>{
        
        if(data.message){
          return Swal.fire({
            title: 'No se pudo crear el usuario',
            text: data.message,
            icon: 'warning'
          })
          }
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
    if(type==='representante'){
      const representanteFormatedDate=new Date(this.representanteBirthday.value).toISOString()
      // DATA
      const representante = {
        nombre: this.representanteName.value,
        apellido: this.representanteLastName.value,
        email: this.representanteEmail.value,
        telefono: this.representantePhoneNumber.value,
        direccion: this.representanteAdress.value,
        fecha_nacimiento: representanteFormatedDate,
        cedula: this.representanteCedula.value,
        cedula_tipo: this.representanteCedulaType.value,
      }
      console.log(representante);
      
      // POST REPRESENTANTE
      this.Representante.post(representante)
      .subscribe(
      data=>{
        
        if(data.message){
          return Swal.fire({
            title: 'No se pudo crear el usuario',
            text: data.message,
            icon: 'warning'
          })
          }
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
  }
}
