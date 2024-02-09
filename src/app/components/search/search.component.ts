import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output () value = new EventEmitter<string>()

  faSearch=faSearch
  form:any

  ngOnInit(){
    this.form = new FormGroup({
      input: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ])
    })
  }

  get input(){
    return this.form.get('input').value
  }

  addValue(value:string){
    this.value.emit(value.toLowerCase())    
  }

  submitHandler(){
    this.addValue(this.input)
    this.form.reset()
  }
}
