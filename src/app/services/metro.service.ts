import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';

@Injectable()
export class MetroService {

  //API_BASE: string = process.env.API_BASE_URL;
  API_BASE: string = 'http://svc.metrotransit.org';

  constructor(private apiService: ApiService) { }

  public getProviders (): Promise<any> {
    return this.apiService.get(this.API_BASE + '/nextrip/providers?format=json');
  }

  public getRoutes (): Promise<any> {
    return this.apiService.get(this.API_BASE  + '/nextrip/routes?format=json');
  }

  public getDirections (routeValue: any): Promise<any> {
    return this.apiService.get(this.API_BASE  + '/NexTrip/Directions/'+ routeValue +'?format=json');
  }

  public getStops (routeValue: any, dierectionValue: any): Promise<any> {
    return this.apiService.get(this.API_BASE  + '/NexTrip/Stops/' + routeValue + '/' + dierectionValue + '?format=json');
  }

  public getTimes (routeValue: any, dierectionValue: any, stopValue: any): Promise<any> {
    return this.apiService.get(this.API_BASE  + '/NexTrip/' + routeValue + '/' + dierectionValue + '/' + stopValue + '?format=json');
  }
}
