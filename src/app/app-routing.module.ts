import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  { path:'', redirectTo: '/games', pathMatch: 'full' },
  {
    path:'', component: SkeletonComponent,
    children:[
      {
        path: 'games',
        loadChildren:() => 
          import('@modules/home/home.module').then( (m)=> m.HomeModule)
      },
      { path:'**', redirectTo: '/games', pathMatch: 'full' },
    ]
  },
  { path:'**', redirectTo: '/games', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
