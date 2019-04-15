/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SenderComponent } from './sender/sender.component';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
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
export { SenderModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SenderModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21mLWFwcDEvIiwic291cmNlcyI6WyJhcHAvc2VuZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFakY7SUFlRSxzQkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7WUFDOUIsTUFBTSxHQUFHLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7UUFDakUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELG9DQUFhOzs7SUFBYixjQUFpQixDQUFDOztnQkFwQm5CLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsYUFBYTtxQkFDZDtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDZCxlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQ2xDOzs7O2dCQWxCa0IsUUFBUTs7SUEwQjNCLG1CQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FQWSxZQUFZOzs7Ozs7SUFDWCxnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTZW5kZXJDb21wb25lbnQgfSBmcm9tICcuL3NlbmRlci9zZW5kZXIuY29tcG9uZW50JztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTZW5kZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiBlbnRyeUNvbXBvbmVudHM6IFtTZW5kZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbmRlck1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3Qgc2VuZGVyID0gY3JlYXRlQ3VzdG9tRWxlbWVudChTZW5kZXJDb21wb25lbnQsIHsgaW5qZWN0b3IgfSk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtZjEtc2VuZGVyJywgc2VuZGVyKTtcbiAgfVxuXG4gIG5nRG9Cb290c3RyYXAoKSB7fVxufVxuIl19