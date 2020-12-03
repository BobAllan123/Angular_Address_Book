import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { ContactDetailComponent } from './contact-detail/contact-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
