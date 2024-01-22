import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../services/personal/api.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private Personal:ApiService, private router:Router){}

  loginForm:any

  ngOnInit():void{
    
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
    // form request
    this.Personal.get()
    .subscribe( res => {
      
      const personal = res.find(( p:any )=>p.email==this.loginEmail?.value)

      if(!personal) {
        Swal.fire({
          icon: "error",
          title: "User not found",
        })
        .finally(()=>{
          this.loginForm.reset(); 
        });
      }
  
      if (JSON.stringify(personal.cedula)!==this.loginPassword?.value) {
        Swal.fire({
          icon: "error",
          title: "Incorrect password",
        })
        .finally(()=>{
          this.loginForm.reset()
        });
      }else{
        localStorage.setItem('user',JSON.stringify (personal))
        this.router.navigate(['/home'])
      }

    })
  }
}
