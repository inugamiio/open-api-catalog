import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { OpenApi } from '../../models/open-api.model';
import { INU_ICON } from '../icon/icons';
import { Size } from '../../svg/svg.models';
import { SVG, SVG_ANIMATION } from '../../svg/svg.utils';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

export interface SearchMenuComponentEventVerb {
    name: string;
    checked: boolean;
}
export interface SearchMenuComponentEvent {
    verbs: SearchMenuComponentEventVerb[]
}


const SPACE: string = ' ';
@Component({
    selector: 'inu-search-menu',
    styleUrls: ['./search-menu.component.scss'],
    templateUrl: './search-menu.component.html'
})
export class SearchMenuComponent implements OnInit, AfterViewInit {

    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    @Input()
    public data: OpenApi[] | undefined | null = null;

    @Input()
    public duration: number = 500;

    @Output()
    public change: EventEmitter<SearchMenuComponentEvent> = new EventEmitter();

    search!: FormGroup;
    displayStyleclass: string = 'search-menu display';
    size: Size | undefined = undefined;
    displaySize = 20;
    closeSize = 3;
    display: boolean = true;
    icons: any = {
        close: INU_ICON.angleLeft,
        open: INU_ICON.angleRight
    }

    verbsDefault: string[] = ['GET', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE', 'DELETE'];


    @ViewChild('component')
    private component: ElementRef | undefined | null = null;

    /**************************************************************************
    * CONSTRUCTOR
    **************************************************************************/
    constructor(private formBuilder: FormBuilder) {
    }

    ngAfterViewInit(): void {
        if (this.component && this.component.nativeElement) {
            this.size = SVG.MATH.size(this.component.nativeElement);
        }
    }
    ngOnInit(): void {
        this.initForm();
    }


    private initForm() {
        this.search = this.formBuilder.group({
            uri: [],
            verbs: new FormArray([])
        });

        this.search.valueChanges
            .subscribe({
                next: event => this.change.emit(event as SearchMenuComponentEvent)
            });


        const verbField = this.verbsField;
        if (verbField) {
            for (let verb of this.verbsDefault) {
                verbField.push(new FormGroup({
                    name: new FormControl(verb),
                    checked: new FormControl(true)
                }));
            }
        }

    }


    /**************************************************************************
    * EVENT
    **************************************************************************/

    /**************************************************************************
    * ACTIONS
    **************************************************************************/
    toggle() {
        if (this.size) {
            const delta = this.displaySize - this.closeSize;
            SVG.ANIMATION.animate((t) => this.progress(t, delta),
                { duration: this.duration, timer: SVG_ANIMATION.TYPES.easeInCubic });
        }


    }
    private progress(t: number, delta: number) {
        if (!this.component || !this.component.nativeElement) {
            return;
        }

        const currentSize = this.display ? this.displaySize - (t * delta)
            : this.closeSize + (t * delta);

        this.component.nativeElement.setAttribute('style', `width: ${currentSize}rem`);
        if (this.display) {
            this.component.nativeElement.setAttribute('class', `search-menu display inprogress closing`);
        } else {
            this.component.nativeElement.setAttribute('class', `search-menu hide inprogress opening`);
        }

        if (t == 1) {
            this.display = !this.display;
            if (this.display) {
                this.component.nativeElement.setAttribute('class', `search-menu display`);
            } else {
                this.component.nativeElement.setAttribute('class', `search-menu hide`);
            }
        }
    }
    selectAllVerbs() {
        const verbs = this.verbsField;
        if (verbs) {
            for (let verb of verbs.controls) {
                verb.setValue(
                    {
                        name: verb.value.name,
                        checked:true
                    }
                );
            }
        }
    }

    selectAnyVerbs() {
        const verbs = this.verbsField;
        if (verbs) {
            for (let verb of verbs.controls) {
                verb.setValue(
                    {
                        name: verb.value.name,
                        checked:false
                    }
                );
            }
        }
    }

    /**************************************************************************
    * GETTER
    **************************************************************************/
    get verbsField(): FormArray<any> | undefined | null {
        return this.search ? this.search.get('verbs') as FormArray<any> : undefined;
    }

}