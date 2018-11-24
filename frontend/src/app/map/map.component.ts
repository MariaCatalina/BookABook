import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { MouseEvent, GoogleMapsAPIWrapper } from "@agm/core";
import { MapsService } from "./maps.service";
import { Station } from "./Station";
import { MessageService } from "../message.service";
import { Subscription } from "rxjs";
import { isUndefined, isNullOrUndefined } from "util";

@Component({
  selector: "google-map",
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class LocationsGoogleMap implements OnInit {
  model: any = {};

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 46.0008141;
  lng: number = 24.2705566;

  markers: marker[] = [];
  stationList: Station[] = [];
  details = "detalii...";

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ` + index);

    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].isOpen = false;
    }

    this.markers[index].isOpen = true;
    this.details = label;
    this.cdRef.detectChanges();
  }

  mapClicked($event: MouseEvent) {
  }

  message: string;
  subscription: Subscription;

  constructor(private mapsService: MapsService, private cdRef: ChangeDetectorRef, private messageService: MessageService, private gmapsApi: GoogleMapsAPIWrapper) {
  }

  ngOnInit() {
  }


  ngOnDestroy() {
  }

  ngAfterViewInit(): void {
    this.getAllLocations();
    console.log("initialization");
  }

  addNewLocation() {
    this.mapsService.addLocation(this.model).subscribe((resp: any) => {
      this.model = {};
      this.getAllLocations();
    })
  }

  getAllLocations() {
    this.mapsService.getLocations().subscribe((resp: any) => {
      resp.forEach(element => {
        this.markers.push({
          lat: element.lat,
          lng: element.lng,
          label: element.name,
          draggable: false
        });
      });
      this.cdRef.detectChanges();
    });
  }
}



// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  isOpen?: boolean;
}