import { Component, OnInit } from '@angular/core';
import { MockServices } from './mock-services';

@Component({
  selector: 'our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  services = MockServices;
  constructor() {}

  ngOnInit() {}
}
