import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent {

filteredOptions = [];


@Input() label: string = '';
@Input() iconePrefixo: string = '';

}
