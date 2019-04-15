import { createCustomElement } from '@angular/elements';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { ReceiverComponent } from './receiver/receiver.component';

@NgModule({
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
})
export class ReceiverModule {
  constructor(private injector: Injector) {
    const receiver = createCustomElement(ReceiverComponent, { injector });
    customElements.define('mf2-receiver', receiver);
  }

  ngDoBootstrap() {}
}
