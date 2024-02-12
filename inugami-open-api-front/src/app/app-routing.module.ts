import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenApiView } from './views/open-api-view/open-api.view';


const routes: Routes = [
  {path: 'open-api', component: OpenApiView},
  { path: "", component: OpenApiView },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
