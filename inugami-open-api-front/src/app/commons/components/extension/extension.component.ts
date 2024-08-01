import { Component, Input, OnInit ,SecurityContext} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OpenApiComponentSchema, OpenApiPathEndpoint, OpenApiPathEndpointParameter } from '../../models/open-api.model';
import { INU_ICON } from '../icon/icons';

const SPACE : string = ' ';
@Component({
    selector: 'inu-extension',
    styleUrls: ['./extension.component.scss'],
    templateUrl: './extension.component.html'
})
export class ExtensionComponent implements OnInit {
    
    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    @Input()
    public data: any |undefined| null = null;

    keys :string[]| null= null;
    _type:string|null=null;

    
    /**************************************************************************
    * CONSTRUCTOR
    **************************************************************************/
    ngOnInit(): void {

        if(this.data){
            if(Array.isArray(this.data)){
                this._type= 'array';
                this.keys = [];
                for(let i=0; i<this.data.length; i++){
                    this.keys.push(`${i}`);
                }
            }
            else if(typeof this.data == 'object'){
                this._type= 'object';
                this.keys = Object.keys(this.data); 
                this.keys.sort();
            }else{
                this._type= 'primitive';
            }
        }

    }


    getChild(key:string):any{
        if(this._type=='array'){
            const index:number= Number(key);
            return this.data[index];
        }else{
            return this.data[key];
        }
    }
}