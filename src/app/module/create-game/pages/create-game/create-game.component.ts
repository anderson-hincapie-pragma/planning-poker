import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent {

  public labelText: string = 'Nombra la partida';
  public inputType: 'email' | 'number' | 'search' | 'text' = 'text';
  public createGameControl: FormGroup = this.formBuilder.group({
    name: [{ value: null, disabled: false}, [Validators.required]]
  });
  get nameControl() {
    return this.createGameControl.get('name') as FormControl;
  }
  public actionButtonText: string = 'Crear partida';

  constructor(
    private formBuilder: FormBuilder
  ) {}

  createGame(event: MouseEvent) {
    if (this.createGameControl.invalid) {
      return;
    }

    console.log("create game>>>");
  }

}
