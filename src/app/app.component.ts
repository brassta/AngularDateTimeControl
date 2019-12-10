import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'agenzzia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'time-controls';
  formData = {
    label: 'Labellica',
    locale: 'en',
    value: null,
    time: new Date()
  }

  ngOnInit(): void {
  }


}
