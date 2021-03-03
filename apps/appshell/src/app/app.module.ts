import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@myorg/ui';
import { TodosSharedModule } from '../../../todos/src/app/app.module';
import { FordosSharedModule } from '../../../fordos/src/app/app.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // CommonModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    // RouterModule.forRoot(
    //   [
    //     {
    //       path: '',
    //       loadChildren:
    //         '../../../appshell/src/app/app.module#AppModule',
    //     },
    //     {
    //       path: 'digilist',
    //       loadChildren:
    //         '../../../fordos/src/app/app.module#FordosSharedModule',
    //     },
    //     {
    //       path: 'pokelist',
    //       loadChildren:
    //         '../../../todos/src/app/app.module#TodosSharedModule',
    //     },
    //   ],
    //   { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' }
    // ),
    HttpClientModule,
    UiModule,
    TodosSharedModule.forRoot(),
    FordosSharedModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
