import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


import { Component } from '@angular/core';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

  constructor(){}
  
  pdf(){

    const pdfDefinition:any={
      content:[
        {text:'holaMUndo'}
      ]
    }
    pdfMake.createPdf(pdfDefinition).open()
  }
}
