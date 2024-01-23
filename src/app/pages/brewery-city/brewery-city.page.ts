import { Component, OnInit } from '@angular/core';
import { BreweriesService } from "../../services/breweries/breweries.service";

@Component({
  selector: 'app-brewery-city',
  templateUrl: './brewery-city.page.html',
  styleUrls: ['./brewery-city.page.scss'],
})
export class BreweryCityPage implements OnInit {
  breweries: any[] = [];
  cities: string[] = [];
  selectedCity: string = '';

  constructor(private breweriesService: BreweriesService) {}

  ngOnInit() {
    this.breweriesService.getCities().subscribe(cities => {
      this.cities = cities;
      this.selectedCity = cities[0]; // Nastavit výchozí město
      this.loadBreweriesByCity();
    });
  }

  loadBreweriesByCity() {
    this.breweriesService.getBreweriesByCity(this.selectedCity).subscribe((data: any) => {
      this.breweries = data;
    });
  }

  onCityChange() {
    this.loadBreweriesByCity();
  }
}
