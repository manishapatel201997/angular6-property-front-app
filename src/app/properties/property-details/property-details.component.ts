
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Property } from '../property';
import { PropertyserviceService } from '../propertyservice.service';

import { NgModule } from '@angular/core';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
@Input() property: Property;
id: number;
routeId: any;
returnUrl: string;
editBtnClicked: boolean = false;
errorMessage: any;
constructor(
private http: Http,
private route: ActivatedRoute,
private propertyService: PropertyserviceService,
private router: Router
) { }
ngOnInit() {
this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/properties'
this.routeId = this.route.params
.subscribe(
params => {
console.log(+params['id']);
this.id = +params['id'];
}
)
let propertyRequest = this.route.params
.flatMap((params: Params) =>
this.propertyService.getProperty(+params['id'])
);
propertyRequest.subscribe(
response => this.property = response.json()
);
}

update(property: Property){
this.editBtnClicked = true;
this.propertyService.updateProperty(this.property)
.subscribe(data => {
return true
}, error => {
console.log('Error Editing Post');
return Observable.throw(error);
})
}

onUpdateClicked() {
this.router.navigate([this.returnUrl]);
this.editBtnClicked = false;
}

delete(property: Property): void {
this.propertyService.deleteProperty(this.property.id)
.subscribe(data => {
this.router.navigate([this.returnUrl]);
}, error => this.errorMessage = error);
}
}

