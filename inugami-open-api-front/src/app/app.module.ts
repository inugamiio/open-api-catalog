import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { HttpInterceptor } from './interceptor/http.interceptor';
import { OpenApiView } from './views/open-api-view/open-api.view';

@NgModule({
  declarations: [
    AppComponent,
    OpenApiView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      deps: [],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
