import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfigService } from '../../services/config/config.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-config',
  templateUrl: './create-config.component.html',
  styleUrl: './create-config.component.css'
})
export class CreateConfigComponent {
  constructor(
    private config: ConfigService,
    private formBuilder: FormBuilder,
    private http: HttpClient) { }

  form: any
  loading: boolean = false
  typeList: Array<string> = [
    'Genero', 'Seccion', 'Turno', 'Tipo de Personal', 'Grado escolar', 'Grado Academico'
  ]

  ngOnInit() {
    this.form = this.formBuilder.group({
      type: [null, [Validators.required]],
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      descripcion: ['', [Validators.required, Validators.maxLength(255)]],
    })
    this.config.getGenero().subscribe((resp) => {
      console.log(resp);
    })
    // DEFAULT CEDULA TYPE OPTION
    this.form.controls['type']
      .setValue(this.typeList[0]);
  }

  // GETTERS

  get type() { return this.form.get('type') }
  get nombre() { return this.form.get('nombre') }
  get descripcion() { return this.form.get('descripcion') }

  submitHandler() {
    const form = {
      nombre: this.nombre.value,
      descripcion: this.descripcion.value
    }
    switch (this.type.value) {
      case 'Genero':
        this.config.createGenero(form).subscribe(data => {
          if (data.message) {
            return Swal.fire({
              title: 'No se pudo crear el genero',
              text: data.message,
              icon: 'warning'
            })
          }
          return Swal.fire({
            title: "Genero creado",
            icon: "success"
          }).finally(()=>{
            window.location.reload();
          });
        })
        break;
      case 'Seccion':
        this.config.createSeccion(form).subscribe(data => {
          if (data.message) {
            return Swal.fire({
              title: 'No se pudo crear la seccion',
              text: data.message,
              icon: 'warning'
            })
          }
          return Swal.fire({
            title: "Seccion creada",
            icon: "success"
          }).finally(()=>{
            window.location.reload();
          });
        })
        break;
      case 'Turno':
        this.config.createTurno(form).subscribe(data => {
          if (data.message) {
            return Swal.fire({
              title: 'No se pudo crear el turno',
              text: data.message,
              icon: 'warning'
            })
          }
          return Swal.fire({
            title: "Turno creado",
            icon: "success"
          }).finally(()=>{
            window.location.reload();
          });
        })
        break;
      case 'Tipo de Personal':
        this.config.createSeccion(form).subscribe(data => {
          if (data.message) {
            return Swal.fire({
              title: 'No se pudo crear el tipo de personal',
              text: data.message,
              icon: 'warning'
            })
          }
          return Swal.fire({
            title: "Tipo de personal creado",
            icon: "success"
          }).finally(()=>{
            window.location.reload();
          });
        })
        break;
      case 'Grado escolar':
        this.config.createGradoEscolar(form).subscribe(data => {
          if (data.message) {
            return Swal.fire({
              title: 'No se pudo crear el grado escolar',
              text: data.message,
              icon: 'warning'
            })
          }
          return Swal.fire({
            title: "Grado escolar creado",
            icon: "success"
          }).finally(()=>{
            window.location.reload();
          });
        })
        break;
      case 'Grado academico':
        this.config.createSeccion(form).subscribe(data => {
          if (data.message) {
            return Swal.fire({
              title: 'No se pudo crear el grado academico',
              text: data.message,
              icon: 'warning'
            })
          }
          return Swal.fire({
            title: "Grado academico creado",
            icon: "success"
          }).finally(()=>{
            window.location.reload();
          });
        })
        break;
      default:
        break;
    }
   
  }
}
