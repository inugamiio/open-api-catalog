import { Component, Input, OnInit } from '@angular/core';
import { OpenApiPathEndpointParameter } from '../../models/open-api.model';
const SPACE : string = ' ';

@Component({
    selector: 'inu-endpoint-parameters',
    styleUrls: ['./endpoint-parameters.component.scss'],
    templateUrl: './endpoint-parameters.component.html'
})
export class EndpointParametersComponent implements OnInit {
    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    @Input()
    data?:OpenApiPathEndpointParameter[]|null = null;
    
    parameterExamples :any = {}
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
        const value = this.parameterExamples[index];
        if(value == undefined){
            this.parameterExamples[index] = true;
        }else{
            this.parameterExamples[index] = !value;
        }
    }
    
    /**************************************************************************
    * GETTERS
    **************************************************************************/
    getRowClass(index:number, first:boolean, odd:boolean, styleclass?:string):string{
        const result :string[]= [`index-${index}`];
        if(first){
            result.push('first');
        }
        if(odd){
            result.push('odd');
        }

        if(styleclass){
            result.push(styleclass);
        }
        return result.join(SPACE);
    }

    getParameterClass(index:number, styleclass:string):string{
        const result: string[]= [styleclass];
        const toggle = this.parameterExamples[index];
        if(toggle){
            result.push('display')
        }
        
        return result.join(' ');

    }
}