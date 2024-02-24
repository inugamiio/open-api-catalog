import { Component, OnInit } from '@angular/core';
import { VersionRestService } from 'src/app/services/connector/version.rest-service';
import { OpenApi, OpenApiComponentSchema, OpenApiPathEndpoint } from 'src/app/commons/models/open-api.model';
import { SearchMenuComponentEvent } from 'src/app/commons/components/search_menu/search-menu.component';

@Component({
  templateUrl: './open-api.view.html',
  styleUrls: ['./open-api.view.scss']
})
export class OpenApiView implements OnInit {



    // =================================================================================================================
    // ATTRIBUTES
    // =================================================================================================================
    data : OpenApi|null= null;
    apis : OpenApi[]|null= null;
    searchData : SearchMenuComponentEvent|null = null;

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
            this.apis= [res];
            console.log(res);

        }
       });
    }


    // =================================================================================================================
    // ACTION
    // =================================================================================================================

    
    // =================================================================================================================
    // EVENTS
    // =================================================================================================================
    searchChange(event:SearchMenuComponentEvent|any){
      if(event.verbs ){
        this.searchData = event;
      }
      
    }
    // =================================================================================================================
    // GETTERS
    // =================================================================================================================

    get schemas() :  OpenApiComponentSchema[]{
      return this.data && this.data.components && this.data.components.schemas ?  this.data.components.schemas : [];
    }

    canDisplay(path: OpenApiPathEndpoint):boolean{
      if(!this.searchData){
        return true;
      }
      let result = true;

      const verb = path.verb.toUpperCase();
      const searchVerb = this.searchData.verbs.filter(item=> item.name == verb);
      if(searchVerb.length>0){
        result = searchVerb[0].checked;
      }

      return result;
    }

}