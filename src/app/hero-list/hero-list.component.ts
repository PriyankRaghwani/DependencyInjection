import { logging } from 'protractor';
import { LoggerService } from './../services/logger.service';
import { Hero } from './../classes/Hero';
import { HeroService } from './../services/hero.service';
import { Component, OnInit, Optional } from '@angular/core';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes : Hero[];

  constructor(private heroService:HeroService,@Optional() private logger?: LoggerService) { 
    if(this.logger){
      this.logger.log("Hero List constructor");
    }
  }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
