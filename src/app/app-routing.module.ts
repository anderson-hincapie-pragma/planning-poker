import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule) },
  { path: 'create-game', loadChildren: () => import('./module/create-game/create-game.module').then(m => m.CreateGameModule) },
  { path: "**", redirectTo: "create-game", pathMatch: "prefix" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
