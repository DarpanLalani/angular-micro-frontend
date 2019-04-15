/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { ReceiverComponent };
if (false) {
    /** @type {?} */
    ReceiverComponent.prototype._message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWl2ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWYtYXBwMi8iLCJzb3VyY2VzIjpbImFwcC9yZWNlaXZlci9yZWNlaXZlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBVUU7O1FBREEsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNFLENBQUM7Ozs7SUFFakIsb0NBQVE7OztJQUFSO0lBQ0EsQ0FBQztJQUVELHNCQUNJLHNDQUFPOzs7O1FBSVgsY0FBd0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFML0MsVUFDWSxPQUFlO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBRTFCLENBQUM7OztPQUFBOztnQkFuQkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsa2JBQXdDOztpQkFFekM7Ozs7OzBCQVVFLEtBQUs7O0lBTVIsd0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWZZLGlCQUFpQjs7O0lBRzVCLHFDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWYtcmVjZWl2ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVjZWl2ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWNlaXZlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVjZWl2ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIF9tZXNzYWdlID0gJyc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNzYWdlID0gbWVzc2FnZTtcblxuICB9XG4gIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9tZXNzYWdlOyB9XG59XG4iXX0=