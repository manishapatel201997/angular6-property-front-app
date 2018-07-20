
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Property } from '../property';
import { PropertyserviceService } from '../propertyservice.service';

@Component({
  selector: 'app-property-new',
  templateUrl: './property-new.component.html',
  styleUrls: ['./property-new.component.css']
})
export class PropertyNewComponent implements OnInit {
  
  
  property = new Property();
submitted: boolean = false;

constructor(
private propertyService: PropertyserviceService,
private router: Router

){}

ngOnInit() {}

onSubmitProperty(property: Property) {
this.submitted = true;
this.propertyService.createProperty(property)
.subscribe(data => {return true},
error => {
console.log("Error creating property");
return Observable.throw(error);
}
)
this.onCreateProperty();
}
onCreateProperty() {
this.router.navigate(['/properties']);
}
}
