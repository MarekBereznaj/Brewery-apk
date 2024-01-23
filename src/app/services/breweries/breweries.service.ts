import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {
  private apiUrl = 'https://api.openbrewerydb.org/breweries';

  constructor(private http: HttpClient) {}

  getBreweries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  getBreweryById(id: string | null): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  getBreweriesByCity(city: string): Observable<any[]> {
    const url = `${this.apiUrl}?by_city=${city}`;
    return this.http.get<any[]>(url);
  }

  searchBreweries(query: string): Observable<any[]> {
    const url = `${this.apiUrl}/search?query=${query}`;
    return this.http.get<any[]>(url);
  }

  getCities(): Observable<string[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(breweries => {
        const cities = breweries.map(brewery => brewery.city);
        return Array.from(new Set(cities)); // Odstranění duplicitních měst
      })
    );
  }
}
