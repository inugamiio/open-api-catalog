import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Tags, TagsWrapper } from '../../models/open-api.model';
import { TreeNode } from '../../models/select-item.model';


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

    /**************************************************************************
    * CONSTRUCTOR
    **************************************************************************/
    constructor(private changeDetectorRef :ChangeDetectorRef ) {

    }

    ngAfterViewInit(): void {

    }


    ngOnInit(): void {
    }

    private updateValue() {

    }

    /**************************************************************************
    * EVENT
    **************************************************************************/
    onSelectedChange(event: any) {
        if (event.target.checked) {
            this.onSelected();
        } else {
            this.onDeselected();
        }
        setTimeout(()=> this.changeDetectorRef.detectChanges(), 100);
    }

    onSelected() {
        console.log('onSelected')
        if(this.input &&  this.input.nativeElement){
            this.input.nativeElement.setAttribute('checked', 'checked');
        }
        if (this.data) {
            this.data.selected = true;
        }
        console.log(this.uri, this.data);
        if (this.parent != null) {
            this.parent.onSelected();
        }
    }
    onDeselected() {
        console.log('onDeselected')
        if(this.data){
            this.data.selected=false;
        }
        if(this.input &&  this.input.nativeElement){
            this.input.nativeElement.setAttribute('checked', '');
        }
        console.log(this.uri, this.data);
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