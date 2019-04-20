/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ReceiverComponent {
    constructor() {
        // tslint:disable-next-line:variable-name
        this._message = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    set message(message) {
        this._message = message;
    }
    /**
     * @return {?}
     */
    get message() { return this._message; }
}
ReceiverComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'mf-receiver',
                template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 2</mat-card-title>\n      <mat-card-subtitle>Receiver</mat-card-subtitle>\n    </mat-card-header>\n   \n    <mat-card-content>\n      <b>\n       Message Received:\n      </b>\n      \n      <div class=\"example-full-width\" >\n        <p> {{_message}}</p>\n      </div>\n       \n    </mat-card-content>\n\n    </mat-card>",
                styles: [".example-card{max-width:400px;background-color:#b995ea;min-height:200px}.example-full-width{width:100%}"]
            }] }
];
/** @nocollapse */
ReceiverComponent.ctorParameters = () => [];
ReceiverComponent.propDecorators = {
    message: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ReceiverComponent.prototype._message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWl2ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWYtYXBwMi8iLCJzb3VyY2VzIjpbImFwcC9yZWNlaXZlci9yZWNlaXZlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXpELE1BQU0sT0FBTyxpQkFBaUI7SUFJNUI7O1FBREEsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNFLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsSUFDSSxPQUFPLENBQUMsT0FBZTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUUxQixDQUFDOzs7O0lBQ0QsSUFBSSxPQUFPLEtBQWEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O1lBcEJoRCxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixrYkFBd0M7O2FBRXpDOzs7OztzQkFVRSxLQUFLOzs7O0lBTk4scUNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtZi1yZWNlaXZlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWNlaXZlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlY2VpdmVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNlaXZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgX21lc3NhZ2UgPSAnJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuX21lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gIH1cbiAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX21lc3NhZ2U7IH1cbn1cbiJdfQ==