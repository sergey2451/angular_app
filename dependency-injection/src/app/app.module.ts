import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceServiceDemoComponent } from './price-service-demo/price-service-demo.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserDemoInjectorComponent } from './user-demo/user-demo.injector.component';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceServiceDemoComponent,
    UserDemoComponent,
    UserDemoInjectorComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }