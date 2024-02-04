import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { EndpointComponent } from './components/endpoint/endpoint.component';


@NgModule({
  declarations: [
    EndpointComponent
  ],
  exports:[
    EndpointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
})
export class CommonsModule { }
