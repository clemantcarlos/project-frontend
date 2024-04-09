import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ApiServicePersonal } from '../services/personal/api.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private Personal:ApiServicePersonal, private router:Router){}

  loginForm:any

  ngOnInit():void{

    if(localStorage.getItem('user')!==null){
      localStorage.removeItem('user')
    }
    
    // form validation
    this.loginForm = new FormGroup({
      loginEmail: new FormControl('',
      {
        updateOn:'blur',
        validators:[
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"),
        ]
      }),
      loginPassword: new FormControl('',
      {
        validators:[
          Validators.required,
          Validators.minLength(6)
        ]
      })
    })
  }

  // form getters
  get loginEmail(){
    return this.loginForm.get('loginEmail')
  }
  get loginPassword(){
    return this.loginForm.get('loginPassword')
  }

  // form submit
  onSubmit():any{

    try {
        // form request
      this.Personal.get()
      .subscribe( res => {

        // const personal = res.find(( p:any )=>p.tipoPersonal == this.loginEmail?.value)
        
        const personal = res.find(( p:any )=>p.email==this.loginEmail?.value)

        if(!personal) {
          Swal.fire({
            icon: "error",
            title: "User not found",
          })
          .finally(()=>{
            this.loginForm.reset(); 
            return
          });
        }
    
        if (JSON.stringify(personal?.cedula)!==this.loginPassword?.value) {
          Swal.fire({
            icon: "error",
            title: "Incorrect password",
          })
          .finally(()=>{
            if(localStorage.getItem('user')!==null) localStorage.removeItem('user')
            this.loginForm.reset()
            return
          });
        }
        else if(personal?.id_tipo_personal!=="e14d7a33-8cc8-4a32-8281-9c49fe2d2056" && personal?.id_tipo_personal !== "82045d1a-3ef3-4397-b1d4-67956ca042fe"){
          Swal.fire({
            icon: "error",
            title: "Acceso denegado",
          })
          .finally(()=>{
            if(localStorage.getItem('user')!==null) localStorage.removeItem('user')
            this.loginForm.reset()
            return
          });
        }
        else{
          localStorage.setItem('user',JSON.stringify (personal))
          this.router.navigate(['/home'])
        }
      })
    } catch (error:any) {
      Swal.fire({
        icon: "error",
        title: `ERROR AL CONECTAR CON EL SERVIDOR SERVIDOR: ${error?.message}`,
      })
      .finally(()=>{
        return
      })
    }
  }
}
