import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceAlumno } from '../services/alumno/api.service';
import { ApiServiceRepresentante } from '../services/representante/api.service';
import { ApiServicePersonal } from '../services/personal/api.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user:any
  child:any
  parent:any
  userType:string=''
  id:string=''
  constructor(
    private naviRouter:Router,
    private router:ActivatedRoute, 
    private Personal:ApiServicePersonal,
    private Representante:ApiServiceRepresentante,
    private Alumno:ApiServiceAlumno){}


  ngOnInit(){
     this.router.url.subscribe(url => {
      
      this.id = this.router.snapshot.params['id']

      this.Personal.get().subscribe((resp)=>{
        const match = resp.find((el:any)=>(el.id)===this.id)
        if (match) {
          this.user = match 
          this.userType = 'personal'
        }
      })
      this.Alumno.get().subscribe((resp)=>{
        const match = resp.find((el:any)=>(el.id)===this.id)
        if (match){
          this.Representante.get(match.cedula).subscribe((resp)=>{
            this.parent=resp
          })
          this.user = match
          this.userType = 'alumno'
        }
      })
      this.Representante.get().subscribe((resp)=>{
        const match = resp.find((el:any)=>(el.id)===this.id)
        if (match){
          this.Alumno.get(match.cedula).subscribe((resp)=>{
            this.child=resp          
          })
          this.user = match
          this.userType = 'representante'
        }
      })
    });
  }

  parentDetail(id:string){
    this.naviRouter.navigate([`/users/${id}`])
  }
  childDetail(id:string){
    this.naviRouter.navigate([`/users/${id}`])
  }
}
