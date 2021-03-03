import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@myorg/ui';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';

const providers : any = []
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // CommonModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    HttpClientModule,
    UiModule
  ],
  providers: providers,
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({
}) 
export class FordosSharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers,
    }
  }
}