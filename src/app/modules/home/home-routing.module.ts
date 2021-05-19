import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { GameListComponent } from './pages/game-list/game-list.component';

const routes: Routes = [
  {
    path: '',
    component: GameListComponent
  },
  {
    path: 'search/:game-search',
    component: GameListComponent
  },
  {
    path: 'details/:id',
    component: GameDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
