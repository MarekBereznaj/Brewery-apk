import { Component, OnInit } from '@angular/core';
import {BreweriesService} from "../../services/breweries/breweries.service";

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.page.html',
  styleUrls: ['./breweries.page.scss'],
})
export class BreweriesPage implements OnInit {
breweries: any[] = [];

  constructor(private breweriesService: BreweriesService) {}

  ngOnInit() {
    this.loadBreweries();
  }

  loadBreweries() {
    this.breweriesService.getBreweries().subscribe((data: any) => {
      this.breweries = data;
    });
  }
}
