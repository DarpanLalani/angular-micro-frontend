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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWl2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWYtYXBwMi8iLCJzb3VyY2VzIjpbImFwcC9yZWNlaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFbEU7SUFlRSx3QkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7WUFDOUIsUUFBUSxHQUFHLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQztRQUNyRSxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsc0NBQWE7OztJQUFiLGNBQWlCLENBQUM7O2dCQXBCbkIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGFBQWE7cUJBQ2Q7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2QsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQ3BDOzs7O2dCQWpCa0IsUUFBUTs7SUF5QjNCLHFCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FQWSxjQUFjOzs7Ozs7SUFDYixrQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlY2VpdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWNlaXZlci9yZWNlaXZlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZWNlaXZlckNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuIGVudHJ5Q29tcG9uZW50czogW1JlY2VpdmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBSZWNlaXZlck1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgcmVjZWl2ZXIgPSBjcmVhdGVDdXN0b21FbGVtZW50KFJlY2VpdmVyQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWYyLXJlY2VpdmVyJywgcmVjZWl2ZXIpO1xuICB9XG5cbiAgbmdEb0Jvb3RzdHJhcCgpIHt9XG59XG4iXX0=