import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts = CONTACTS;
  selectedContact: Contact;

  constructor() {};
  
  ngOnInit() {};

  onSelect(contact : Contact): void {
    this.selectedContact = contact;
  }
  
}
