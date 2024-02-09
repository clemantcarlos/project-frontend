import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css'
})
export class Page404Component {
  constructor(private location:Location){}
  ngOnInit(){
    setTimeout(()=>{
      this.location.back()
    },4000)
  }
}
