import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-game-template',
  templateUrl: './create-game-template.component.html',
  styleUrls: ['./create-game-template.component.scss']
})
export class CreateGameTemplateComponent {

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
