import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServicePersonal } from '../../services/personal/api.service';
import { ApiServiceAlumno } from '../../services/alumno/api.service';
import { ApiServiceRepresentante } from '../../services/representante/api.service';
import { HttpClient } from '@angular/common/http';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrl: './delete-form.component.css'
})
export class DeleteFormComponent {
  personal: any
  alumno: any
  representante: any
  selectTypes: Array<any> = ['V', 'J', 'E'];
  faSearch = faSearch
  deleteForm: any
  constructor(
    private formBuilder: FormBuilder,
    private Personal: ApiServicePersonal,
    private Alumno: ApiServiceAlumno,
    private Representante: ApiServiceRepresentante,
    private http: HttpClient) { }

  ngOnInit() {
    this.deleteForm = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      cedula_tipo: [null, [Validators.required]]
    })

    // DEFAULT CEDULA TYPE OPTION
    this.deleteForm.controls['cedula_tipo']
      .setValue(this.selectTypes[0]);
  }

  // FUNCTIONS

  submitHandler() {
    this.Personal.get().subscribe((resp) => {
      const personal = resp.find(p => p.cedula == this.cedula.value)

      if (!personal) return

      this.personal = personal
    }).add(() => {
      if (this.personal) {
        Swal.fire({
          title: "Estas seguro de eliminar el usuario?",
          text: "No seras capaz de reverir este cambio!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, ELIMINAR!"
        }).then((result) => {
          if (result.isConfirmed) {
            this.Personal.delete(this.personal.id).subscribe(resp => {
              Swal.fire({
                title: "Eliminado!",
                text: "El usuario ha sido eliminado con exito.",
                icon: "success"
              });
            })
          }
        }).finally(()=>{
          this.personal=''
        });
      }
    })
    this.Alumno.get().subscribe((resp) => {
      const alumno = resp.find(a => a.cedula == this.cedula.value)

      if (!alumno) return

      this.alumno = alumno
    }).add(() => {
      if (this.alumno) {
        Swal.fire({
          title: "Estas seguro de eliminar el usuario?",
          text: "No seras capaz de reverir este cambio!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, ELIMINAR!"
        }).then((result) => {
          if (result.isConfirmed) {
            this.Alumno.delete(this.alumno.id).subscribe(resp => {
              Swal.fire({
                title: "Eliminado!",
                text: "El usuario ha sido eliminado con exito.",
                icon: "success"
              });
            })
          }
        }).finally(()=>{
          this.alumno=''
        });
      }
    })
    this.Representante.get().subscribe((resp) => {
      const representante = resp.find(r => r.cedula == this.cedula.value)

      if (!representante) return

      this.representante = representante
    }).add(() => {
      if (this.representante) {
        Swal.fire({
          title: "Estas seguro de eliminar el usuario?",
          text: "No seras capaz de reverir este cambio!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, ELIMINAR!"
        }).then((result) => {
          if (result.isConfirmed) {
            this.Representante.delete(this.representante.id).subscribe(resp => {
              Swal.fire({
                title: "Eliminado!",
                text: "El usuario ha sido eliminado con exito.",
                icon: "success"
              });
            })
          }
        }).finally(()=>{
          this.representante=''
        });
      }
    })

  }

  // GETTERS
  get cedula() { return this.deleteForm.get('cedula') }
  get cedula_tipo() { return this.deleteForm.get('cedula_tipo') }



}
