import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input()
  public type: 'email' | 'number' | 'search' | 'text' = 'text';

  @Input()
  public placeholder: string = '';

  @Input()
  public control: FormControl = new FormControl();

}
