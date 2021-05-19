import { Component, Input, OnInit } from '@angular/core';
import { IGame } from '@data/interfaces/igame.metadata';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {

  @Input() game: IGame
  
  constructor() { }

  ngOnInit(): void {
  }

}
