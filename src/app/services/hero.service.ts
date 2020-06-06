import { LoggerService } from './logger.service';
import { HEROES } from './../classes/mock-hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private logger: LoggerService) { }

  getHeroes(){
    this.logger.log('Getting Heroes...');
    return HEROES;
  }
}
