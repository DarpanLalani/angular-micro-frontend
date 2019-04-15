import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SenderComponent } from './sender/sender.component';
import {MatButtonModule, MatInputModule, MatCardModule} from '@angular/material';

@NgModule({
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
})
export class SenderModule {
  constructor(private injector: Injector) {
    const sender = createCustomElement(SenderComponent, { injector });
    customElements.define('mf1-sender', sender);
  }

  ngDoBootstrap() {}
}
