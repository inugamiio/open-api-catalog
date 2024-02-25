import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { OpenApi, Tags, TagsWrapper } from 'src/app/commons/models/open-api.model';
import { TreeNode } from '../commons/models/select-item.model';

const BASE_URL : string = "ws/v1/version";

@Injectable({providedIn: 'root'})
export class OpenApiService {


    // =================================================================================================================
    // constructor
    // =================================================================================================================
    constructor( ) {
    }
    


    // =================================================================================================================
    // API
    // =================================================================================================================
    public resolveTags(openApis : OpenApi[]):TreeNode<TagsWrapper>{
        const children : TreeNode<TagsWrapper>[] =[];

        const documentedTags : Tags[]= [];
        for(let api of openApis){
            if(api.tags){
                
            }
        }




        return {
            children: children
        }
    }

  


}