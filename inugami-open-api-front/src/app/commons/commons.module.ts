import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';
import { AppRoutingModule } from '../app-routing.module';
import { CodeComponent } from './components/code/code.component';
import { EndpointParametersComponent } from './components/endpoint/endpoint-parameters.component';
import { EndpointResponseComponent } from './components/endpoint/endpoint-response.component';
import { EndpointComponent } from './components/endpoint/endpoint.component';
import { ExtensionComponent } from './components/extension/extension.component';
import { IconComponent } from './components/icon/icon.component';
import { SearchTagsComponent } from './components/search-tags/search-tags.component';
import { SearchMenuComponent } from './components/search_menu/search-menu.component';
import { TagComponent } from './components/tag/tag.component';


@NgModule({
  declarations: [
    CodeComponent,
    EndpointComponent,
    EndpointParametersComponent,
    EndpointResponseComponent,
    IconComponent,
    ExtensionComponent,
    SearchMenuComponent,
    SearchTagsComponent,
    TagComponent
  ],
  exports:[
    CodeComponent,
    EndpointComponent,
    EndpointParametersComponent,
    EndpointResponseComponent,
    IconComponent,
    ExtensionComponent,
    SearchMenuComponent,
    SearchTagsComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class CommonsModule { }
