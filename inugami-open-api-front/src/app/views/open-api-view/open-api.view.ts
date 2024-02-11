import { Component, OnInit } from '@angular/core';
import { VersionRestService } from 'src/app/services/connector/version.rest-service';
import { OpenApi, OpenApiComponentSchema } from 'src/app/commons/models/open-api.model';

@Component({
  templateUrl: './open-api.view.html',
  styleUrls: ['./open-api.view.scss']
})
export class OpenApiView implements OnInit {



    // =================================================================================================================
    // ATTRIBUTES
    // =================================================================================================================
    data : OpenApi|null= null;


    // =================================================================================================================
    // INIT
    // =================================================================================================================
    constructor(private versionRestService:VersionRestService){

    }
    ngOnInit(): void {
        
       console.log("init");
       this.versionRestService.getOpenApi('lastest').subscribe({
        next: res=> {
            this.data = res;
        }
       });
    }


    // =================================================================================================================
    // ACTION
    // =================================================================================================================


    // =================================================================================================================
    // GETTERS
    // =================================================================================================================

    get schemas() :  OpenApiComponentSchema[]{
      return this.data && this.data.components && this.data.components.schemas ?  this.data.components.schemas : [];
    }

}