import {Component, OnInit} from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';
import { MetroService } from './services/metro.service';

@Component({
	templateUrl: 'app.component.html',
  styleUrls:[ 'app.component.css'],
	selector: 'my-app'
})
export class AppComponent implements OnInit {

  public routeList: SelectItem[];
  public directionList: SelectItem[];
  public stopList: SelectItem[];
  public timeList: any[];

  public selectedRoute: SelectItem;
  public selectedDirection: SelectItem;
  public selectedStop: SelectItem;

  public selectedLat: number;
  public selectedLong: number;

  public selectedTime: any;


  public lat: number = 44.9778;
  public lng: number = -93.2650;

  constructor(public metroService: MetroService)
  {
  }


  public updateRoutes(): void {
    let routesDataList: any[] = [];
    this.routeList = [];
    // this.selectedRoute = null;

    this.metroService.getRoutes()
      .then(routes => {
        routesDataList = JSON.parse(JSON.stringify(routes));
        routesDataList.forEach(route => {
          this.routeList.push({label: route.Description, value: route.Route});
        });
    });
  }

  public updateDirections(routeValue: any): void {
    let directionDataList: any[] = [];
    this.directionList = [];

    this.metroService.getDirections(routeValue)
      .then(directions => {
        directionDataList = JSON.parse(JSON.stringify(directions));
        directionDataList.forEach(direction => {
          this.directionList.push({label: direction.Text, value: direction.Value});
        });
    });
  }

  public updateStops(routeValue: any, directionValue: any): void {
    let stopsDataList: any[] = [];
    this.stopList = [];

    this.metroService.getStops(routeValue, directionValue)
      .then(stops => {
        stopsDataList = JSON.parse(JSON.stringify(stops));
        stopsDataList.forEach(stop => {
          this.stopList.push({label: stop.Text, value: stop.Value});
        });
    });
  }

  public updateTimes(routeValue: any, directionValue: any, stopValue: any): void {
    let timesDateList: any[] = [];
    this.timeList = [];

    this.metroService.getTimes(routeValue, directionValue, stopValue)
      .then(times => {
        this.timeList = times;
    });

  }

  public updateMap($event: any): void {
    let newLat = this.selectedTime.VehicleLatitude;
    let newLng = this.selectedTime.VehicleLongitude;

    this.lat = (newLat == 0) ? this.lat : newLat;
    this.lng = (newLng == 0) ? this.lng : newLng;
  }

  public onSelectedTime($event: any): void {
    console.log($event.value);
  }


  public onRouteSelected($event: any): void {
    this.updateDirections(this.selectedRoute);
  }

  public onDirectionSelected($event: any): void {
    this.updateStops(this.selectedRoute, this.selectedDirection);
  }

  public onStopSelected($event: any): void {
    this.updateTimes(this.selectedRoute,this.selectedDirection, this.selectedStop);
  }

  ngOnInit() {
    this.updateRoutes();
  }
}
