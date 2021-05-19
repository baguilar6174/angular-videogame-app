import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IGame } from '@data/interfaces/igame.metadata';
import { HttpService } from '@data/services/api/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  public gameRating:number = 0;
  public gameId: string;
  public currentGame: IGame;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
  ) {
    this.gameId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.httpService.getGameById(this.gameId).subscribe((r) => {
      if (!r.error) {
        this.currentGame = r.data;
        setTimeout(() => {
          this.gameRating = this.currentGame.metacritic;
        }, 1000);
        console.log(this.currentGame);
      }
    });
  }

  getColor(value: number): string {
    if(value > 75 ){
      return '#5ee432';
    } else if(value > 50 ){
      return '#fffa50';
    } else if(value > 30 ){
      return '#f7aa39';
    } else {
      return '#ef4655';
    }
  }

  // 57:40

}
