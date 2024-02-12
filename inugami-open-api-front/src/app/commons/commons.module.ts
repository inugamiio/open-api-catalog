import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';
import { AppRoutingModule } from '../app-routing.module';
import { CodeComponent } from './components/code/code.component';
import { EndpointParametersComponent } from './components/endpoint/endpoint-parameters.component';
import { EndpointComponent } from './components/endpoint/endpoint.component';


@NgModule({
  declarations: [
    CodeComponent,
    EndpointComponent,
    EndpointParametersComponent
  ],
  exports:[
    CodeComponent,
    EndpointComponent,
    EndpointParametersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule
  ],
  providers: [],
})
export class CommonsModule { }
