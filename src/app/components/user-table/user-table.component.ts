import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServicePersonal } from '../../services/personal/api.service';
import { ApiServiceAlumno } from '../../services/alumno/api.service';
import { ApiServiceRepresentante } from '../../services/representante/api.service';
import Swal from 'sweetalert2';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {

  inputValue:string=''

  filters:any
  tables:Array<any>=[
    'personal',
    'alumnos',
    'representantes'
  ]
  default:string='personal';
  users:any;
  columns:string[]=[]
  alumnoColumns:string[]=[
    'Nombre','Apellido','Cedula',
    'Email','Fecha de nacimiento', 
    'Cedula Representante','Sexo','Turno','Grado','Seccion', ''
  ]
  personalColumns:string[]=[
    'Nombre','Apellido','Cedula','Direccion',
    'Email','Fecha de nacimiento', 'Telefono', 
    'Rif', 'Tipo de personal', 'Grado Academico', 'Turno', ''
  ]
  representanteColumns:string[]=[
    'Nombre','Apellido','Cedula','Direccion','Email','Fecha de nacimiento','Telefono',''
  ]

  turnoList:any;
  gradoEscolarList:any;
  seccionList:any;
  academicDegrees:any;
  personalTypes:any;
  biologicalSex:any;

  constructor(
    private Config:ConfigService,
    private Personal:ApiServicePersonal,
    private Representante:ApiServiceRepresentante,
    private Alumno:ApiServiceAlumno){}

  ngOnInit(){

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

    // Form
    this.filters= new FormGroup({
      table: new FormControl(null)
    })
    this.filters.controls['table'].setValue(this.default,{onlyself:true})
    
    // load table
    this.fetchData()
  }

  get selectedTable():string{
    return this.filters.get('table').value
  }

  // Navbar Input info
  searchBarHandler(value:any){
    switch (this.selectedTable) {
      case 'personal':
        this.Personal.get().subscribe((resp)=>{
           const match = resp.filter((el:any)=>(el.nombre.toLowerCase())===value)

          if (match.length === 0) Swal.fire({icon: "error",title: "User not found"})
          .finally(()=>{this.users = resp})

          if (match.length !== 0) this.users = match
        })
      break;
      case 'alumnos':
        this.Alumno.get().subscribe((resp)=>{
          const match = resp.filter((el:any)=>(el.nombre.toLowerCase())===value)

          if (match.length === 0) Swal.fire({icon: "error",title: "User not found"})
          .finally(()=>{this.users = resp})

          if (match.length !== 0) this.users = match
        })
        break;
      case 'representantes':
        this.Representante.get().subscribe((resp)=>{
          const match = resp.filter((el:any)=>(el.nombre.toLowerCase())===value)

          if (match.length === 0) Swal.fire({icon: "error",title: "User not found"})
          .finally(()=>{this.users = resp})

          if (match.length !== 0) this.users = match
        })
        break;
      default:
        Swal.fire({icon: "error",title: "Error en la tabla"})
        .finally(()=>this.fetchData())
    }
  }
  // fech table data and selecting columns
  fetchData():void{
    switch (this.selectedTable) {
      case 'personal':
        this.columns=this.personalColumns
        this.Personal.get().subscribe((resp)=>{
          this.users = resp
        })
      break;
      case 'alumnos':
        this.columns=this.alumnoColumns
        this.Alumno.get().subscribe((resp)=>{
          this.users = resp
        })
        break;
      case 'representantes':
        this.columns=this.representanteColumns
        this.Representante.get().subscribe((resp)=>{
          this.users = resp
        })
      break;
    }
  }
}
