import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Tags, TagsWrapper } from '../../models/open-api.model';
import { TreeNode } from '../../models/select-item.model';
import { INU_ICON } from '../icon/icons';


export const SEARCH_TAGS_HANDLER_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchTagsComponent),
    multi: true
};

@Component({
    selector: 'inu-search-tags',
    styleUrls: ['./search-tags.component.scss'],
    templateUrl: './search-tags.component.html',
    providers: [SEARCH_TAGS_HANDLER_ACCESSOR]
})
export class SearchTagsComponent implements ControlValueAccessor, OnInit, AfterViewInit {

    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    @Input()
    public data: TreeNode<TagsWrapper> | null = null;

    @Input()
    public parent: SearchTagsComponent | null = null;

    @ViewChildren('children') children!: SearchTagsComponent[]|null;
    @ViewChild('input') input!: ElementRef|null;

    checkedCross = INU_ICON.checked;

    /**************************************************************************
    * CONSTRUCTOR
    **************************************************************************/
    constructor(private changeDetectorRef :ChangeDetectorRef ) {

    }

    ngAfterViewInit(): void {

    }


    ngOnInit(): void {
        if(this.data){
            if(this.data.selected == undefined){
                this.data.selected = true;
            }
        }
    }

    private updateValue() {

    }

    /**************************************************************************
    * EVENT
    **************************************************************************/
    selectChildren(){
        if(!this.data){
            return;
        }
        this.data.selected = true;

        if(this.children){
            for(let child of this.children){
                child.selectChildren();
            }
        }
    }


    onSelectedChange() {
        if(!this.data){
            return;
        }
        if (this,this.data.selected) {
            this.onDeselected();
        } else {
            this.onSelected();
        }
    }

    onSelected() {
        
        if (this.data) {
            this.data.selected = true;
        }
        
        if (this.parent != null) {
            this.parent.onSelected();
        }
    }
    onDeselected() {
        
        if(this.data){
            this.data.selected=false;
        }
        if(this.children){
            for(let child of this.children){
                child.onDeselected();
            }
        }
    }
    /**************************************************************************
    * ACTIONS
    **************************************************************************/

    /**************************************************************************
    * GETTER
    **************************************************************************/

    get currentComponent(): SearchTagsComponent {
        return this;
    }
    get uri(): string {
        let uri: string | undefined = '/';
        if (this.data) {
            uri = this.data.path;
        }

        return uri == undefined ? '/' : uri;

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