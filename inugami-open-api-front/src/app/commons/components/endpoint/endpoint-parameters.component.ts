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
    
    /**************************************************************************
    * CONSTRUCTOR
    **************************************************************************/
    constructor() { }


    ngOnInit(): void {
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

}