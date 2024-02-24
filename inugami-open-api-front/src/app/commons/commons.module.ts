import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';
import { AppRoutingModule } from '../app-routing.module';
import { CodeComponent } from './components/code/code.component';
import { EndpointParametersComponent } from './components/endpoint/endpoint-parameters.component';
import { EndpointResponseComponent } from './components/endpoint/endpoint-response.component';
import { EndpointComponent } from './components/endpoint/endpoint.component';
import { ExtensionComponent } from './components/extension/extension.component';
import { IconComponent } from './components/icon/icon.component';
import { SearchMenuComponent } from './components/search_menu/search-menu.component';


@NgModule({
  declarations: [
    CodeComponent,
    EndpointComponent,
    EndpointParametersComponent,
    EndpointResponseComponent,
    IconComponent,
    ExtensionComponent,
    SearchMenuComponent
  ],
  exports:[
    CodeComponent,
    EndpointComponent,
    EndpointParametersComponent,
    EndpointResponseComponent,
    IconComponent,
    ExtensionComponent,
    SearchMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule
  ],
  providers: [],
})
export class CommonsModule { }
