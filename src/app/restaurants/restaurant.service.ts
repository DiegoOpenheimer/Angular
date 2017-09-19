import { Restaurant } from './restaurant.model'
import { Http } from '@angular/http'
import { MEAT_API } from '../api'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add//operator/map'
import { Injectable } from '@angular/core'
import { HandlerError } from '../Error-handler'
import 'rxjs/add/operator/catch'

@Injectable()
export class RestaurantService {

    constructor(private http: Http) { }

    public getRestaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(responde => responde.json())
            .catch(HandlerError.ErrorHandler)
    }

    public getRestaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(HandlerError.ErrorHandler)
    }

    public reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(HandlerError.ErrorHandler)
    }

    public menuOfRestaurants(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(HandlerError.ErrorHandler)
    }

}