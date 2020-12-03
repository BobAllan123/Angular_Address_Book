import { Component } from '@angular/core';
import { Contact } from '../contacts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'Address-Book';
  
  contact: Contact = {
    id: 1,
    name: 'Windstorm'
  }
  
}
