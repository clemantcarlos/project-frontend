import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-config',
  templateUrl: './create-config.component.html',
  styleUrl: './create-config.component.css'
})
export class CreateConfigComponent {
  constructor(

    private formBuilder: FormBuilder,
    private http: HttpClient) { }

  form: any
  loading:boolean=false

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      descripcion: ['', [Validators.required, Validators.maxLength(255)]],
    })
  }

  // GETTERS
  get nombre() { return this.form.get('nombre') }
  get descripcion() { return this.form.get('descripcion') }

  submitHandler(){
    console.log('a');
    
  }
}
