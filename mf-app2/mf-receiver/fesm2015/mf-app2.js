import { createCustomElement } from '@angular/elements';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, NgModule, Injector } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReceiverComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReceiverModule {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        /** @type {?} */
        const receiver = createCustomElement(ReceiverComponent, { injector });
        customElements.define('mf2-receiver', receiver);
    }
    /**
     * @return {?}
     */
    ngDoBootstrap() { }
}
ReceiverModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ReceiverComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    MatButtonModule,
                    MatInputModule,
                    MatCardModule
                ],
                providers: [],
                entryComponents: [ReceiverComponent]
            },] }
];
/** @nocollapse */
ReceiverModule.ctorParameters = () => [
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ReceiverModule, ReceiverComponent as ɵa };

//# sourceMappingURL=mf-app2.js.map