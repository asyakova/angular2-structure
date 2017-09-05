import {Component, Input, ElementRef, OnInit} from "@angular/core";

@Component({
    selector: 'zoom',
    templateUrl: './zoom.component.html'
})

export class ZoomComponent implements OnInit {
    @Input() zoomSelector = String;
    constructor(private elRef:ElementRef) {}

    public selectedRange:number = 100; // input range starts at 100
    public selectedRangeMarker: string = '33.3';

    public setZoomStyle() {
        /**
         * set the Zoom style for the element we want to zoom
         */
        this.elRef.nativeElement.parentNode.querySelector(this.zoomSelector).style.zoom = this.selectedRange / 100;
    }

    public changeRange(event) {
        /**
         *  make sure the range is in our limits
         */
        if(event > 200) {
            event = 200;
        } else if (event < 50) {
            event = 50;
        }
        this.selectedRange = event;
        /**
         we subtract the same 50 (input start) and divide by 1.5 (the % range is 200 - 50 = 150, and the
         slider width is 100%. 150 / 100 = 1.5)
         */
        this.selectedRangeMarker = ((Number(event) - 50) / 1.5).toString();
        this.setZoomStyle();
    }
    /**
     * onLoad we should initially set the Zoom style for the element we want to zoom
     */
    ngOnInit() {
        this.setZoomStyle();
    }
}