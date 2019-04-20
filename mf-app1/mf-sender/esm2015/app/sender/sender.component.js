/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class SenderComponent {
    constructor() {
        this.sendMsgTxt = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    sendMessage() {
        console.log(this.sendMsgTxt);
        /** @type {?} */
        const receiverele = document.querySelector('mf2-receiver');
        if (receiverele != null) {
            // tslint:disable-next-line:no-string-literal
            receiverele['message'] = this.sendMsgTxt;
        }
    }
}
SenderComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'mf-sender',
                template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 1</mat-card-title>\n      <mat-card-subtitle>Sender</mat-card-subtitle>\n    </mat-card-header>\n   \n    <mat-card-content>\n      <p>\n       Type your message below:\n      </p>\n      \n      <mat-form-field class=\"example-full-width\" >\n          <input matInput [(ngModel)] ='sendMsgTxt'>\n          </mat-form-field>\n       \n    </mat-card-content>\n    <mat-card-actions>\n        <button (click)=\"sendMessage()\" mat-raised-button color=\"primary\"> Send Message to App 2</button> \n    </mat-card-actions>\n",
                styles: [".example-card{max-width:400px;background-color:#5b9cf1}.example-full-width{width:100%}"]
            }] }
];
/** @nocollapse */
SenderComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    SenderComponent.prototype.sendMsgTxt;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21mLWFwcDEvIiwic291cmNlcyI6WyJhcHAvc2VuZGVyL3NlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTZCLE1BQU0sZUFBZSxDQUFDO0FBUXJFLE1BQU0sT0FBTyxlQUFlO0lBRTFCO1FBQ0EsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQURBLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O2NBQ3ZCLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUMxRCxJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7WUFDdkIsNkNBQTZDO1lBQzdDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHluQkFBc0M7O2FBRXZDOzs7Ozs7SUFJQyxxQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtZi1zZW5kZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VuZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VuZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZW5kZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHNlbmRNc2dUeHQgPSAnJztcbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzZW5kTWVzc2FnZSgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbmRNc2dUeHQpO1xuICAgIGNvbnN0IHJlY2VpdmVyZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWYyLXJlY2VpdmVyJyk7XG4gICAgaWYgKHJlY2VpdmVyZWxlICE9IG51bGwpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgICAgcmVjZWl2ZXJlbGVbJ21lc3NhZ2UnXSA9IHRoaXMuc2VuZE1zZ1R4dDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==