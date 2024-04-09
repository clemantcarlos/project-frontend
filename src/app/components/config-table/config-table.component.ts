import { Component } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrl: './config-table.component.css'
})
export class ConfigTableComponent {

  constructor(
    private config: ConfigService,
    private formBuilder: FormBuilder,
    private http: HttpClient) { }

  faTrash=faTrash;
  items: any;
  filters: any;
  typeList: Array<string> = [
    'Genero', 'Seccion', 'Turno', 'Tipo de Personal', 'Grado escolar', 'Grado academico'
  ]
  columns: Array<string> = [
    'Nombre', 'Descripcion', ''
  ]

  ngOnInit() {
    this.filters = this.formBuilder.group({
      table: [null, Validators.required]
    })
    // DEFAULT 
    this.filters.controls['table']
      .setValue(this.typeList[0]);

    this.fetchData()
  }

  get selectedTable(): string {
    return this.filters.get('table').value
  }

  delete(event:any){
    const id = event.target.parentNode.parentNode.parentNode.getAttribute('id')
    switch (this.selectedTable) {
      case 'Genero':
        this.config.deleteGenero(id).subscribe((resp) => {
          return Swal.fire({
              title: 'Eliminado con exito',
              icon: 'success'
            }).finally(()=>{
              window.location.reload();
            });
        })
        break;

      case 'Seccion':
        this.config.deleteSeccion(id).subscribe((resp) => {
          return Swal.fire({
              title: 'Eliminado con exito',
              icon: 'success'
            }).finally(()=>{
              window.location.reload();
            });
        })
        break;
      case 'Turno':
        this.config.deleteTurno(id).subscribe((resp) => {
          return Swal.fire({
              title: 'Eliminado con exito',
              icon: 'success'
            }).finally(()=>{
              window.location.reload();
            });
        })
        break;
      case 'Tipo de Personal':
        this.config.deleteTipoPersonal(id).subscribe((resp) => {
          return Swal.fire({
              title: 'Eliminado con exito',
              icon: 'success'
            }).finally(()=>{
              window.location.reload();
            });
        })
        break;
      case 'Grado escolar':
        this.config.deleteGradoEscolar(id).subscribe((resp) => {
          return Swal.fire({
              title: 'Eliminado con exito',
              icon: 'success'
            }).finally(()=>{
              window.location.reload();
            });
        })
        break;
      case 'Grado academico':
        this.config.deleteGradoAcademico(id).subscribe((resp) => {
          return Swal.fire({
              title: 'Eliminado con exito',
              icon: 'success'
            }).finally(()=>{
              window.location.reload();
            });
        })
        break;
    }
  }

  fetchData(): void {
    switch (this.selectedTable) {
      case 'Genero':
        this.config.getGenero().subscribe((resp) => {
          this.items = resp
        })
        break;

      case 'Seccion':
        this.config.getSeccion().subscribe((resp) => {
          this.items = resp
        })
        break;
      case 'Turno':
        this.config.getTurno().subscribe((resp) => {
          this.items = resp
        })
        break;
      case 'Tipo de Personal':
        this.config.getTipoPersonal().subscribe((resp) => {
          this.items = resp
        })
        break;
      case 'Grado escolar':
        this.config.getGradoEscolar().subscribe((resp) => {
          this.items = resp
        })
        break;
      case 'Grado academico':
        this.config.getGradoAcademico().subscribe((resp) => {
          this.items = resp
        })
        break;
    }
  }
}
