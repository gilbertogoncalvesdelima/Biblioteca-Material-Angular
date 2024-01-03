import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  // Controle de formularios, FormGroup
  formBusca: FormGroup

  constructor() {
  this.formBusca = new FormGroup({
    somenteIda :new FormControl(false)
  })
   }
}
