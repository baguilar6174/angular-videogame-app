import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IGame } from '@data/interfaces/igame.metadata';
import { HttpService } from '@data/services/api/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit, OnDestroy {

  public sort: string;
  public games: IGame[];
  private routeSub: Subscription;
  private gameSub: Subscription;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      if(params['game-search']){
        this.searchGames('metacrit', params['game-search']);
      }else {
        this.searchGames('metacrit');
      }
    });
  }

  // Get games form api
  searchGames(sort: string, search?: string) {
    this.gameSub = this.httpService.getGameList(sort, search).subscribe(r => {
      if (!r.error) {
        // Access to results array
        this.games = r.data.results;
        console.log(this.games);
      }
    });
  }

  // GameDetails
  gameDetails(id: string){
    this.router.navigate(['games/details', id]);
  }

  ngOnDestroy(): void {
    if(this.gameSub) {
      this.gameSub.unsubscribe();
    }
    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
