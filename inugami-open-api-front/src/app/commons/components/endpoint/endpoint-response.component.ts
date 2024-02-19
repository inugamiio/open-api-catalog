import { Component, Input, OnInit } from '@angular/core';
import { OpenApiComponentSchema, OpenApiPathEndpointParameter, OpenApiPathEndpointResponse } from '../../models/open-api.model';
import { INU_ICON } from '../icon/icons';
const SPACE : string = ' ';

@Component({
    selector: 'inu-endpoint-response',
    styleUrls: ['./endpoint-response.component.scss'],
    templateUrl: './endpoint-response.component.html'
})
export class EndpointResponseComponent implements OnInit {
    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    @Input()
    data?:OpenApiPathEndpointResponse|null = null;
    @Input()
    public schemas : OpenApiComponentSchema[]|null = null;
    
    parameterExamples :any = {}
    exampleStatus : any={};
    icon : any = {
        angleUp : INU_ICON.angleUp,
        angleDown : INU_ICON.angleDown
    };
    /**************************************************************************
    * CONSTRUCTOR
    **************************************************************************/
    constructor() { }


    ngOnInit(): void {
    }


    /**************************************************************************
    * ACTIONS
    **************************************************************************/
     toggleExample(index:number){
        const status = this.exampleStatus[index];
        if(status == undefined){
            this.exampleStatus[index]=true;
            return true;
        }else{
            this.exampleStatus[index]=!this.exampleStatus[index];
            return this.exampleStatus[index];
        }
    }
    /**************************************************************************
    * GETTERS
    **************************************************************************/
     getExampleDisplayStatus(index:number):boolean{
        this.exampleStatus[index];
        if(this.exampleStatus==undefined){
            this.exampleStatus[index]= false;
            return false;
        }else{
            return this.exampleStatus[index];
        }
     }

     isExampleNotDisplay(index:number):boolean{
        const status = this.exampleStatus[index];
        if(status==undefined){
            return true;
        }else{
            return !status;  
        }
     }

     isExampleDisplay(index:number):boolean{
        const status = this.exampleStatus[index];
        if(status==undefined){
            return false;
        }else{
            return status;  
        }
    }

    get isError():boolean{
        if(this.data && this.data.status){
            try{
                const status = Number(this.data.status);
                return status>=400;
            }catch(e){
            }
        }
        return false;
    }

}