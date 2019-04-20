import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component, NgModule, Injector } from '@angular/core';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SenderModule = /** @class */ (function () {
    function SenderModule(injector) {
        this.injector = injector;
        /** @type {?} */
        var sender = createCustomElement(SenderComponent, { injector: injector });
        customElements.define('mf1-sender', sender);
    }
    /**
     * @return {?}
     */
    SenderModule.prototype.ngDoBootstrap = /**
     * @return {?}
     */
    function () { };
    SenderModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SenderComponent
                    ],
                    imports: [
                        BrowserModule,
                        FormsModule,
                        MatButtonModule,
                        MatInputModule,
                        MatCardModule
                    ],
                    providers: [],
                    entryComponents: [SenderComponent]
                },] }
    ];
    /** @nocollapse */
    SenderModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return SenderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SenderModule, SenderComponent as ɵa };

//# sourceMappingURL=mf-app1.js.map