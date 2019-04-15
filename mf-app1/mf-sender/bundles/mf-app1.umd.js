(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/elements'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/core'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('mf-app1', ['exports', '@angular/elements', '@angular/platform-browser', '@angular/forms', '@angular/core', '@angular/material'], factory) :
    (factory((global['mf-app1'] = {}),global.ng.elements,global.ng.platformBrowser,global.ng.forms,global.ng.core,global.ng.material));
}(this, (function (exports,elements,platformBrowser,forms,core,material) { 'use strict';

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
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'mf-sender',
                        template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 1</mat-card-title>\n      <mat-card-subtitle>Sender</mat-card-subtitle>\n    </mat-card-header>\n   \n    <mat-card-content>\n      <p>\n       Send Message using this app to another app\n      </p>\n      \n      <mat-form-field class=\"example-full-width\" >\n          <input matInput [(ngModel)] ='sendMsgTxt' >\n          </mat-form-field>\n       \n    </mat-card-content>\n    <mat-card-actions>\n        <button (click)=\"sendMessage()\" mat-raised-button color=\"primary\"> Send Message to App 2</button> \n    </mat-card-actions>\n",
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
            var sender = elements.createCustomElement(SenderComponent, { injector: injector });
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
            { type: core.NgModule, args: [{
                        declarations: [
                            SenderComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            material.MatButtonModule,
                            material.MatInputModule,
                            material.MatCardModule
                        ],
                        providers: [],
                        entryComponents: [SenderComponent]
                    },] }
        ];
        /** @nocollapse */
        SenderModule.ctorParameters = function () {
            return [
                { type: core.Injector }
            ];
        };
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

    exports.SenderModule = SenderModule;
    exports.ɵa = SenderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mf-app1.umd.js.map