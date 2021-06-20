import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDesignComponent } from './form-design/form-design.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDesignComponent,
    NavbarComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    AngularPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
