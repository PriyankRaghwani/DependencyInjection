import { HeroListComponent } from './../hero-list/hero-list.component';
import { HeroService } from './../services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  test =  runTests();
  constructor() { }

  ngOnInit(): void {
  }

}

function runTests(){
  const expectedHeroes = [ { name : 'Priyank10' }, { name : 'Priynk11' }]
  const mockSeervice = <HeroService> {getHeroes: () => this.expectedHeroes }
  it('should have heroes when HeroListCoomponent Created', () => {
    const component = new HeroListComponent(mockSeervice);
    expect(component.heroes.length).toEqual(expectedHeroes.length);
  });
}

var testName: string;
var testResults: {pass: string; message: string};

function expect(actual: any) {
  return {
    toEqual: function(expected: any){
      testResults = actual === expected ?
        {pass: 'passed', message: testName} :
        {pass: 'failed', message: `${testName}; expected ${actual} to equal ${expected}.`};
    }
  };
}

function it(label: string, test: () => void) {
  testName = label;
  test();
}