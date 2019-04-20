/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var SenderComponent = /** @class */ (function () {
    function SenderComponent() {
        this.sendMsgTxt = '';
    }
    /**
     * @return {?}
     */
    SenderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SenderComponent.prototype.sendMessage = /**
     * @return {?}
     */
    function () {
        console.log(this.sendMsgTxt);
        /** @type {?} */
        var receiverele = document.querySelector('mf2-receiver');
        if (receiverele != null) {
            // tslint:disable-next-line:no-string-literal
            receiverele['message'] = this.sendMsgTxt;
        }
    };
    SenderComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'mf-sender',
                    template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 1</mat-card-title>\n      <mat-card-subtitle>Sender</mat-card-subtitle>\n    </mat-card-header>\n   \n    <mat-card-content>\n      <p>\n       Type your message below:\n      </p>\n      \n      <mat-form-field class=\"example-full-width\" >\n          <input matInput [(ngModel)] ='sendMsgTxt'>\n          </mat-form-field>\n       \n    </mat-card-content>\n    <mat-card-actions>\n        <button (click)=\"sendMessage()\" mat-raised-button color=\"primary\"> Send Message to App 2</button> \n    </mat-card-actions>\n",
                    styles: [".example-card{max-width:400px;background-color:#5b9cf1}.example-full-width{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    SenderComponent.ctorParameters = function () { return []; };
    return SenderComponent;
}());
export { SenderComponent };
if (false) {
    /** @type {?} */
    SenderComponent.prototype.sendMsgTxt;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21mLWFwcDEvIiwic291cmNlcyI6WyJhcHAvc2VuZGVyL3NlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTZCLE1BQU0sZUFBZSxDQUFDO0FBRXJFO0lBUUU7UUFDQSxlQUFVLEdBQUcsRUFBRSxDQUFDO0lBREEsQ0FBQzs7OztJQUVqQixrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O1lBQ3ZCLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUMxRCxJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7WUFDdkIsNkNBQTZDO1lBQzdDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHluQkFBc0M7O2lCQUV2Qzs7OztJQWdCRCxzQkFBQztDQUFBLEFBckJELElBcUJDO1NBZlksZUFBZTs7O0lBRzFCLHFDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21mLXNlbmRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZW5kZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZW5kZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgc2VuZE1zZ1R4dCA9ICcnO1xuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VuZE1zZ1R4dCk7XG4gICAgY29uc3QgcmVjZWl2ZXJlbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZjItcmVjZWl2ZXInKTtcbiAgICBpZiAocmVjZWl2ZXJlbGUgIT0gbnVsbCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gICAgICByZWNlaXZlcmVsZVsnbWVzc2FnZSddID0gdGhpcy5zZW5kTXNnVHh0O1xuICAgIH1cbiAgfVxufVxuIl19