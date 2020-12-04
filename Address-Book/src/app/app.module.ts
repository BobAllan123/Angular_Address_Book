import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsComponent } from './contacts/contacts.component';

import { AppRoutingModule } from './app-routing.module';
import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent,
    AddContactComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
