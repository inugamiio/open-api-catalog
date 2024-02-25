import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { OpenApi, Tags, TagsWrapper, OpenApiPathEndpoint } from 'src/app/commons/models/open-api.model';
import { TreeNode } from '../commons/models/select-item.model';

const BASE_URL: string = "ws/v1/version";
interface EndpointTags {
    endpoint: OpenApiPathEndpoint;
    tags: Tags[]
}
@Injectable({ providedIn: 'root' })
export class OpenApiService {


    // =================================================================================================================
    // constructor
    // =================================================================================================================
    constructor() {
    }



    // =================================================================================================================
    // API
    // =================================================================================================================
    public resolveTags(openApis: OpenApi[]): TreeNode<TagsWrapper> {
        const children: TreeNode<TagsWrapper>[] = [];

        const documentedTags: Tags[] = [];
        for (let api of openApis) {
            if (api.tags) {
                for (let tag of api.tags) {
                    if (!this.tagExists(tag, documentedTags)) {
                        documentedTags.push(tag);
                    } else {
                        console.log(`tag ${tag.name} already exists : ${JSON.stringify(tag)}`);
                    }
                }
            }
        }




        const endpoints = this.extractEndpoints(openApis);
        const allTags: Tags[] = documentedTags.concat([]);
        for (let endpoint of endpoints) {
            for (let tag of endpoint.tags) {
                if (!this.tagExists(tag, allTags)) {
                    allTags.push(tag);
                }
            }
        }


        const buffer: any = {};
        for (let endpoint of endpoints) {

            if (endpoint.tags.length == 0) {
                let root = this.createOrGetBucket('/', buffer);
                if(!root.value){
                    root.value= {};
                }
                if(!root.value.endpoint){
                    root.value.endpoint =[];
                }   
                root.value.endpoint.push(endpoint.endpoint);
            }
            else{
                const fullPath = endpoint.tags.join('/');
                let node = this.createOrGetBucket(fullPath, buffer);
                if(!node.value){
                    node.value={};
                }
                if(!node.value.endpoint){
                    node.value.endpoint =[];
                }   
                node.value.endpoint.push(endpoint.endpoint);

                const parent = this.createOrGetBucket(endpoint.tags.slice(1).join('/'), buffer);
                if(!this.haveChildren(parent,node)){
                    if(!parent.children){
                        parent.children = [];
                    }
                    parent.children.push(node);
                }
            }
        }



        const result: TreeNode<TagsWrapper> = {
            value: {
                tags: allTags
            },
            children: [this.createOrGetBucket('/', buffer)]
        };

        console.log('resolveTags', result);
        return result;
    }

    private haveChildren(parent:TreeNode<TagsWrapper>,node:TreeNode<TagsWrapper> ):boolean{
        if(!parent.children){
            return false;
        }
        for(let child of parent.children){
            if(child.path == node.path){
                return true;
            }
        }
        return false;
    }

    private createOrGetBucket(path: string, buffer: any): TreeNode<TagsWrapper> {
        let result = buffer[path];
        if (result) {
            return result;
        }
        result = {path : path};
        buffer[path] = result;
        return result;
    }

    private tagExists(tag: Tags, documentedTags: Tags[]): boolean {
        for (let docTag of documentedTags) {
            if (docTag.name.toUpperCase() == tag.name.toUpperCase()) {
                return true;
            }
        }
        return false;
    }

    private extractEndpoints(openApis: OpenApi[]): EndpointTags[] {
        const result: EndpointTags[] = [];

        for (let api of openApis) {
            if (api.paths) {
                for (let endpoint of api.paths) {
                    const tags: Tags[] = [];

                    if (endpoint.tags) {
                        for (let tag of endpoint.tags) {
                            tags.push({
                                name: tag
                            })
                        }
                    }

                    result.push({
                        endpoint: endpoint,
                        tags: tags
                    })
                }
            }

        }
        return result;
    }

}