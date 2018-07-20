
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Property } from '../property';
import { PropertyserviceService } from '../propertyservice.service';

@Component({
selector: 'app-property-list',
templateUrl: './property-list.component.html',
styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

properties: Property[];
errorMessage: any;

constructor(
private propertyService: PropertyserviceService,
private router: Router,
private route: ActivatedRoute
) { }

ngOnInit() {
let timer = Observable.timer(0, 5000);
timer.subscribe(() => this.getProperties());
this.getProperties();
console.log(this.properties);
}

getProperties() {
    this.propertyService.getProperties()
      .subscribe(properties => this.properties = properties);
  }

  showProperty(property: Property): void {
    let propertyLink = ['/properties', property.id];
    this.router.navigate(propertyLink);
  }

}
