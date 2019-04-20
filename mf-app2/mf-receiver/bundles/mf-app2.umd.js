(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/elements'), require('@angular/material'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mf-app2', ['exports', '@angular/elements', '@angular/material', '@angular/forms', '@angular/platform-browser', '@angular/core'], factory) :
    (factory((global['mf-app2'] = {}),global.ng.elements,global.ng.material,global.ng.forms,global.ng.platformBrowser,global.ng.core));
}(this, (function (exports,elements,material,forms,platformBrowser,core) { 'use strict';

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
             */ function () { return this._message; },
            set: /**
             * @param {?} message
             * @return {?}
             */ function (message) {
                this._message = message;
            },
            enumerable: true,
            configurable: true
        });
        ReceiverComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'mf-receiver',
                        template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 2</mat-card-title>\n      <mat-card-subtitle>Receiver</mat-card-subtitle>\n    </mat-card-header>\n   \n    <mat-card-content>\n      <b>\n       Message Received:\n      </b>\n      \n      <div class=\"example-full-width\" >\n        <p> {{_message}}</p>\n      </div>\n       \n    </mat-card-content>\n\n    </mat-card>",
                        styles: [".example-card{max-width:400px;background-color:#b995ea;min-height:200px}.example-full-width{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        ReceiverComponent.ctorParameters = function () { return []; };
        ReceiverComponent.propDecorators = {
            message: [{ type: core.Input }]
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
            var receiver = elements.createCustomElement(ReceiverComponent, { injector: injector });
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
            { type: core.NgModule, args: [{
                        declarations: [
                            ReceiverComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            material.MatButtonModule,
                            material.MatInputModule,
                            material.MatCardModule
                        ],
                        providers: [],
                        entryComponents: [ReceiverComponent]
                    },] }
        ];
        /** @nocollapse */
        ReceiverModule.ctorParameters = function () {
            return [
                { type: core.Injector }
            ];
        };
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

    exports.ReceiverModule = ReceiverModule;
    exports.ɵa = ReceiverComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mf-app2.umd.js.map