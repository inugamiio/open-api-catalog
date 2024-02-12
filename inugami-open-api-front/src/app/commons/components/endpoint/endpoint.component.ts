import { Component, Input, OnInit ,SecurityContext} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OpenApiComponentSchema, OpenApiPathEndpoint, OpenApiPathEndpointParameter } from '../../models/open-api.model';

const SPACE : string = ' ';
@Component({
    selector: 'inu-endpoint',
    styleUrls: ['./endpoint.component.scss'],
    templateUrl: './endpoint.component.html'
})
export class EndpointComponent implements OnInit {
    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    @Input()
    public endpoint: OpenApiPathEndpoint | null = null;
    @Input()
    public schemas : OpenApiComponentSchema[]|null = null;
    @Input()
    public display:boolean=false;

    headers?:OpenApiPathEndpointParameter[]|null = null;
    options?:OpenApiPathEndpointParameter[]|null = null;
    parameters?:OpenApiPathEndpointParameter[]|null = null;
    
    /**************************************************************************
    * CONSTRUCTOR
    **************************************************************************/
    constructor(private sanitizer: DomSanitizer) { }


    ngOnInit(): void {
        if(this.endpoint && this.endpoint.parameters){
            this.parameters= [];
            this.options = [];
            this.headers=[];

            for(let param of this.endpoint.parameters){ 
                if('path'==param.in){
                    this.parameters.push(param);
                }
                else if('header'==param.in){
                    this.headers.push(param);
                }
                else{
                    this.options.push(param);
                }
            }
        }
    }



    /**************************************************************************
    * ACTIONS
    **************************************************************************/
    toggleDisplay():void{
        this.display= !this.display;   
    }


    /**************************************************************************
    * GETTER
    **************************************************************************/
    get styleclass(){
        const result = ['inu-endpoint'];
        if(this.endpoint && this.endpoint.verb){
            result.push(this.endpoint.verb.toLowerCase());
        }
        return result.join(' ');
    }


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