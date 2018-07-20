
import { Property } from './property';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable({
providedIn: 'root'
})
export class PropertyserviceService {
headers: Headers;
options: RequestOptions;
private propertyUrl = 'http://localhost:3000/properties'

constructor(private http: Http) {
this.headers = new Headers({'Content-Type' : 'application/json'});
this.options = new RequestOptions({headers: this.headers});
}
getProperties(): Observable<Property[]> {
    return this.http.get(this.propertyUrl)
      .map((response: Response) => <Property[]>response.json())
  }

getProperty(id: number) {
    return this.http.get(this.propertyUrl + '/' + id + '.json')
  }

  createProperty(property: Property): Observable<Property> {
    return this.http.post(this.propertyUrl, JSON.stringify(property), this.options)
      .map((res: Response) => res.json());
  }

  deleteProperty(id: number): Observable<Property> {
    const url  = `${this.propertyUrl}/${id}`;
    return this.http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateProperty(property: Property): Observable<Property> {
    const url  = `${this.propertyUrl}/${property.id}`;
    return this.http.put(url, JSON.stringify(property),
      this.options)
        .map((res: Response) => res.json());
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
