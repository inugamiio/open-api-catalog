import { Component, Input, OnInit ,SecurityContext} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OpenApiPathEndpoint } from '../../models/open-api.model';


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

    /**************************************************************************
    * CONSTRUCTOR
    **************************************************************************/
    constructor(private sanitizer: DomSanitizer) { }


    ngOnInit(): void {
        console.log("EndpointComponent", this.endpoint);
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


}