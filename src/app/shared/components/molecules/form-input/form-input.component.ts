import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {

  @Input()
  public labelText: string = 'Label';

  @Input()
  public inputType: 'email' | 'number' | 'search' | 'text' = 'text';

  @Input()
  public inputPlaceholder: string = '';

  @Input()
  public inputControl: FormControl = new FormControl();

}
