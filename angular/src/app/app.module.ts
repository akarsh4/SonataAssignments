import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfExampleComponent } from './if-example/if-example.component';
import { FormsModule } from '@angular/forms'
import { CustomDirective } from './CustomDirective';
import { ForeachComponent } from './foreach/foreach.component';
@NgModule({
  declarations: [
    AppComponent,
    IfExampleComponent,CustomDirective, ForeachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
