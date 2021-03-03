import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosSharedModule } from 'apps/todos/src/app/app.module';
import { FordosSharedModule } from 'apps/fordos/src/app/app.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
  // {
  //   path: '',
  //   loadChildren:
  //     '../../../appshell/src/app/app.module#AppModule',
  // },
  {
    path: 'fordos',
    loadChildren:
      'apps/fordos/src/app/app.module#FordosSharedModule',
  },
  {
    path: 'todos',
    loadChildren:
      'apps/todos/src/app/app.module#TodosSharedModule',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodosSharedModule.forRoot(),
    FordosSharedModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
