import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})

export class AddContactComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) {}

  ngOnInit(): void {

  }

  goBack(): void {
    this.location.back();
  }

}
