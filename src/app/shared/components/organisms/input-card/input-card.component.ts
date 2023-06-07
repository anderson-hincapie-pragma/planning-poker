import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent {

  @Input()
  public labelText: string = 'Label';

  @Input()
  public inputType: 'email' | 'number' | 'search' | 'text' = 'text';

  @Input()
  public inputPlaceholder: string = '';

  @Input()
  public inputControl: FormControl = new FormControl();

  @Input()
  public actionButtonText: string = 'Text';

  @Input()
  public buttonDisabled: boolean = false;

  @Output()
  public actionButtonClick: EventEmitter<MouseEvent> = new EventEmitter();

}
