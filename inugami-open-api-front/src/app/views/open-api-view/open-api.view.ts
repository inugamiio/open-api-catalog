import { Component, OnInit } from '@angular/core';
import { VersionRestService } from 'src/app/services/connector/version.rest-service';
import { OpenApi, OpenApiComponentSchema, OpenApiPathEndpoint, Tags, TagsWrapper } from 'src/app/commons/models/open-api.model';
import { SearchMenuComponentEvent } from 'src/app/commons/components/search_menu/search-menu.component';
import { OpenApiService } from 'src/app/services/open-api.service';
import { TreeNode } from 'src/app/commons/models/select-item.model';

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
    tags :TreeNode<TagsWrapper>|null=null;
    // =================================================================================================================
    // INIT
    // =================================================================================================================
    constructor(private openApiService:OpenApiService,
                private versionRestService:VersionRestService){

    }
    ngOnInit(): void {
        
       console.log("init");
       this.versionRestService.getOpenApi('lastest').subscribe({
        next: res=> {
            this.data = res;
            this.apis= [res];
            console.log(res);
            this.tags= this.openApiService.resolveTags(this.apis);
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

      if(result && this.searchData.uri){
        const searchUri = this.searchData.uri.toUpperCase();
        const currentUri = path.url.toUpperCase();
        result = currentUri.indexOf(searchUri) != -1;
      }

      return result;
    }

    get rootTag() :TreeNode<TagsWrapper>|null {
      if(this.tags && this.tags.children && this.tags.children.length>0){
        return this.tags.children[0];
      }
      return null;
    }
}