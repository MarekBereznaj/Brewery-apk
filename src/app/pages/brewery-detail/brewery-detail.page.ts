import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BreweriesService} from "../../services/breweries/breweries.service";

@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.page.html',
  styleUrls: ['./brewery-detail.page.scss'],
})
export class BreweryDetailPage implements OnInit {
brewery: any;

  constructor(
    private route: ActivatedRoute,
    private breweriesService: BreweriesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const breweryId = params.get('id');
      this.loadBreweryDetail(breweryId);
    });
  }

  loadBreweryDetail(id: string | null) {
    this.breweriesService.getBreweryById(id).subscribe((data) => {
      this.brewery = data;
    });
  }
}
