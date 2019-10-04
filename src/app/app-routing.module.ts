import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: '@module/chat/chat.module#ChatModule'
  },
  {
    path: '404',
    loadChildren: '@module/not-found/not-found.module#NotFoundModule'
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
