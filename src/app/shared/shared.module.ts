import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent } from './components/atoms/action-button/action-button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './components/molecules/form-input/form-input.component';
import { InputCardComponent } from './components/organisms/input-card/input-card.component';
import { CreateGameTemplateComponent } from './components/templates/create-game-template/create-game-template.component';



@NgModule({
  declarations: [
    ActionButtonComponent,
    InputComponent,
    FormInputComponent,
    InputCardComponent,
    CreateGameTemplateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ActionButtonComponent,
    InputComponent,
    FormInputComponent,
    InputCardComponent,
    CreateGameTemplateComponent
  ]
})
export class SharedModule { }
