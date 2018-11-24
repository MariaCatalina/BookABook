import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { LocationsGoogleMap } from './map.component';
import {MapsService} from "./maps.service";

@NgModule({
  declarations: [
    LocationsGoogleMap
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyB-pEbB2oHty7mWof9-c1uBHMFTgQV2T7U'
    })
  ],
  providers: [MapsService,GoogleMapsAPIWrapper],
  exports: []
})

export class GoogleMapModule { }
