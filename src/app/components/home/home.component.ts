import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsList;
  currentCategory = 'technology';
  currentCountry = 'us';
  currentSource = '';
  categoryList = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  countryList = ['ua', 'us', 'ng', 'ch'];
  sourcesList = [];

  constructor(
    public newsApiService: NewsApiService
  ) { }

  ngOnInit() {
    this.newsApiService.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
        this.newsList = news['articles'];
    });
    /// get all sources
    this.newsApiService.getSourceByCountry(this.currentCountry, this.currentCategory).subscribe(sources => {
      if (sources['sources'].length) {
        this.sourcesList = sources['sources'];
        this.currentSource = this.sourcesList[0];
      }
    });
  }
  onChange() {
    this.newsApiService.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });
  }
  onChangeSources() {
    this.newsApiService.getNewsBySource(this.currentSource).subscribe(news => {
      this.newsList = news['articles'];
    });
  }

  identify(index) {
    return index;
  }

}
