import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HeaderComponent {
  windowInnerWidth:number=window.innerWidth
  onResize(e:any){
    this.windowInnerWidth=e.target.innerWidth
  }
  ngOnInit(){
    // hamburguer handler for navbar
    document.addEventListener('click',(event:any)=>{
      // hamburger button selection
      if(event.target.matches('.hamburger') || event.target.matches(`.hamburger *`)){
        document.getElementById('navigation')?.classList.toggle('translate-x-full')  
      }
    })
  }
}
