import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'
import { Station } from "./Station";
import { Observable } from "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';


/**
 * Created by Cata on 1/13/2018.
 */

const SERVER_URL = "http://192.168.163.131:8080/marmotta/sparql/select";

@Injectable()
export class MapsService {
  listStations: Station[] = new Array();
  private baseURL = "http://127.0.0.1:8080/bookabook/location";


  constructor(private http: HttpClient,) {
  }

  addLocation(model: any) {
    let url = this.baseURL + "/addLocation"
    let body = {
      lat: model.lat.toString(),
      lng: model.lng.toString(),
      name: model.name,
    }

    const myheader = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(url, body, { headers: myheader });
  }

  getLocations(){
    let url = this.baseURL + "/getLocations"
    const myheader = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(url,{ headers: myheader });
  }

}
