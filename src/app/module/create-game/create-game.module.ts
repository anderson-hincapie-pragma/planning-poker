import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateGameRoutingModule } from './create-game-routing.module';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    CreateGameComponent
  ],
  imports: [
    CommonModule,
    CreateGameRoutingModule,
    SharedModule
  ]
})
export class CreateGameModule { }
