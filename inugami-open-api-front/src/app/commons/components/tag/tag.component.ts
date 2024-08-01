import { AfterViewInit, Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { OpenApiComponentSchema, OpenApiPathEndpoint, Tags, TagsWrapper } from '../../models/open-api.model';
import { TreeNode } from '../../models/select-item.model';
import { INU_ICON } from '../icon/icons';
import { SearchMenuComponentEvent } from '../search_menu/search-menu.component';


@Component({
    selector: 'inu-tag',
    styleUrls: ['./tag.component.scss'],
    templateUrl: './tag.component.html'
})
export class TagComponent implements  OnInit, AfterViewInit {

    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    @Input()
    public data:TreeNode<TagsWrapper>|null=null;
    @Input()
    public schemas : OpenApiComponentSchema[]|null = null;
    @Input()
    searchData : SearchMenuComponentEvent|null = null;
    @Input()
    level:number|null=null;
    icon : any = {
        angleUp : INU_ICON.angleUp,
        angleDown : INU_ICON.angleDown
    };
    display:boolean=true;


    /**************************************************************************
    * CONSTRUCTOR
    **************************************************************************/
    ngAfterViewInit(): void {

    }


    ngOnInit(): void {
    }

    private updateValue() {

    }

    /**************************************************************************
    * EVENT
    **************************************************************************/

    /**************************************************************************
    * ACTIONS
    **************************************************************************/
    toggle(){
        if(this.currentLevel==0){
            this.display = true;
        }else{
            this.display = !this.display;
        }
    }
    /**************************************************************************
    * GETTER
    **************************************************************************/

    get endpoints():OpenApiPathEndpoint[]|null{
        if(!this.data || !this.data.value  || !this.data.value.endpoint){
            return null;
        }
        return this.data.value.endpoint;
    }

    get children():TreeNode<TagsWrapper>[]|null{
        return this.data && this.data.children? this.data.children: null;
    }

    get childLevel():number{
        return this.currentLevel +1 ;
    }
    get currentLevel(){
        return this.level ? this.level :0;
    }

    get styleclass(){
        return ['inu-tag', `level-${this.currentLevel}`].join(' ');
    }
    canDisplay(endpoint:OpenApiPathEndpoint) : boolean{
        if(!this.searchData){
            return true;
          }
          let result = true;
    
          const verb = endpoint.verb.toUpperCase();
          const searchVerb = this.searchData.verbs.filter(item=> item.name == verb);
          if(searchVerb.length>0){
            result = searchVerb[0].checked;
          }
    
          if(result && this.searchData.uri){
            const searchUri = this.searchData.uri.toUpperCase();
            const currentUri = endpoint.url.toUpperCase();
            result = currentUri.indexOf(searchUri) != -1;
          }
    
          return result;
    }
    /***************************************************************************
    * ControlValueAccessor
    ***************************************************************************/
    writeValue(value: any) {
        if (value !== this.data) {
            this.data = value;
            this.updateValue();
        }
    }

    registerOnChange(fn: any) {
    }
    registerOnTouched(fn: any) {
    }
}