import { AfterViewInit, Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Tags } from '../../models/open-api.model';
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

    public value: TreeNode<Tags>[] | undefined | null = null;




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

    /**************************************************************************
    * GETTER
    **************************************************************************/


    /***************************************************************************
    * ControlValueAccessor
    ***************************************************************************/
    writeValue(value: any) {
        if (value !== this.value) {
            this.value = value;
            this.updateValue();
        }
    }

    registerOnChange(fn: any) {
    }
    registerOnTouched(fn: any) {
    }
}