import { AfterViewInit, Component, ElementRef, Input, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OpenApi, OpenApiComponentSchema, OpenApiPathEndpoint, OpenApiPathEndpointParameter } from '../../models/open-api.model';
import { INU_ICON } from '../icon/icons';
import { Size } from '../svg/svg.models';
import { SVG, SVG_ANIMATION } from '../svg/svg.utils';

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

    displayStyleclass: string = 'search-menu display';
    size: Size | undefined = undefined;
    displaySize = 20;
    closeSize = 3;

    display: boolean = true;
    icons: any = {
        close: INU_ICON.angleLeft,
        open: INU_ICON.angleRight
    }

    @ViewChild('component')
    private component: ElementRef | undefined | null = null;

    /**************************************************************************
    * CONSTRUCTOR
    **************************************************************************/
    ngAfterViewInit(): void {
        if (this.component && this.component.nativeElement) {
            this.size = SVG.MATH.size(this.component.nativeElement);
        }
    }
    ngOnInit(): void {
       
        if (this.data) {

        }

    }

    /**************************************************************************
    * ACTIONS
    **************************************************************************/
    toggle() {
        console.log('toggle', this.size);
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
            this.component.nativeElement.setAttribute('class',`search-menu display inprogress closing`);
        } else {
            this.component.nativeElement.setAttribute('class',`search-menu hide inprogress opening`);
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


    /**************************************************************************
    * GETTER
    **************************************************************************/

}