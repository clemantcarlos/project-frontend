import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buger-btn',
  templateUrl: './buger-btn.component.html',
  styleUrl: './buger-btn.component.css',
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class BugerBtnComponent {
  @Input() activationHandler:any
  windowInnerWidth:number=window.innerWidth

  hamburguerHandler(event:any){
    const burger=document.querySelector('.hamburger')!
    if(event.target.matches('.hamburger') || event.target.matches(`.hamburger *`)){
      burger.classList.toggle('is-active')
    }
  }

  onResize(e:any){
    this.windowInnerWidth=e.target.innerWidth
  }
}
