import { createCustomElement } from '@angular/elements';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, NgModule, Injector } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReceiverComponent = /** @class */ (function () {
    function ReceiverComponent() {
        // tslint:disable-next-line:variable-name
        this._message = '';
    }
    /**
     * @return {?}
     */
    ReceiverComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(ReceiverComponent.prototype, "message", {
        get: /**
         * @return {?}
         */
        function () { return this._message; },
        set: /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            this._message = message;
        },
        enumerable: true,
        configurable: true
    });
    ReceiverComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'mf-receiver',
                    template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 2</mat-card-title>\n      <mat-card-subtitle>Receiver</mat-card-subtitle>\n    </mat-card-header>\n   \n    <mat-card-content>\n      <b>\n       Message Received:\n      </b>\n      \n      <div class=\"example-full-width\" >\n        <p> {{_message}}</p>\n      </div>\n       \n    </mat-card-content>\n\n    </mat-card>",
                    styles: [".example-card{max-width:400px;background-color:#31a04d}.example-full-width{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    ReceiverComponent.ctorParameters = function () { return []; };
    ReceiverComponent.propDecorators = {
        message: [{ type: Input }]
    };
    return ReceiverComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReceiverModule = /** @class */ (function () {
    function ReceiverModule(injector) {
        this.injector = injector;
        /** @type {?} */
        var receiver = createCustomElement(ReceiverComponent, { injector: injector });
        customElements.define('mf2-receiver', receiver);
    }
    /**
     * @return {?}
     */
    ReceiverModule.prototype.ngDoBootstrap = /**
     * @return {?}
     */
    function () { };
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
    ReceiverModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return ReceiverModule;
}());

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