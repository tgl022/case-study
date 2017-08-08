import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';

@Injectable()
export class MetroService {

  constructor(private apiService: ApiService) { }

  public getProviders (): Promise<any> {
    return this.apiService.get(environment.API_BASE_URL + '/nextrip/providers?format=json');
  }

  public getRoutes (): Promise<any> {
    return this.apiService.get(environment.API_BASE_URL + '/nextrip/routes?format=json');
  }

  public getDirections (routeValue: any): Promise<any> {
    return this.apiService.get(environment.API_BASE_URL + '/NexTrip/Directions/'+ routeValue +'?format=json');
  }

  public getStops (routeValue: any, dierectionValue: any): Promise<any> {
    return this.apiService.get(environment.API_BASE_URL + '/NexTrip/Stops/' + routeValue + '/' + dierectionValue + '?format=json');
  }

  public getTimes (routeValue: any, dierectionValue: any, stopValue: any): Promise<any> {
    return this.apiService.get(environment.API_BASE_URL + '/NexTrip/' + routeValue + '/' + dierectionValue + '/' + stopValue + '?format=json');
  }
}
