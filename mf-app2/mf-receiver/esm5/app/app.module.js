/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createCustomElement } from '@angular/elements';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { ReceiverComponent } from './receiver/receiver.component';
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
export { ReceiverModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReceiverModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21mLWFwcDIvIiwic291cmNlcyI6WyJhcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVsRTtJQWVFLHdCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOztZQUM5QixRQUFRLEdBQUcsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO1FBQ3JFLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxzQ0FBYTs7O0lBQWIsY0FBaUIsQ0FBQzs7Z0JBcEJuQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsYUFBYTtxQkFDZDtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDZCxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDcEM7Ozs7Z0JBakJrQixRQUFROztJQXlCM0IscUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQVBZLGNBQWM7Ozs7OztJQUNiLGtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVjZWl2ZXJDb21wb25lbnQgfSBmcm9tICcuL3JlY2VpdmVyL3JlY2VpdmVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJlY2VpdmVyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gZW50cnlDb21wb25lbnRzOiBbUmVjZWl2ZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFJlY2VpdmVyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCByZWNlaXZlciA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoUmVjZWl2ZXJDb21wb25lbnQsIHsgaW5qZWN0b3IgfSk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtZjItcmVjZWl2ZXInLCByZWNlaXZlcik7XG4gIH1cblxuICBuZ0RvQm9vdHN0cmFwKCkge31cbn1cbiJdfQ==