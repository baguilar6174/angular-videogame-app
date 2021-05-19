import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';


@NgModule({
  declarations: [
    GameDetailComponent,
    GameListComponent,
    GameTabsComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
