import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTES } from '@data/constants/routes/api.routes';
import { IAPIResponse, IGame } from '@data/interfaces/igame.metadata';
import { environment } from '@env/environment';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public url = environment.url;
  public isProduction = environment.production;

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * 
   * @returns 
   */
  getGameList(
    ordering: string,
    search?: string
  ): Observable<{
    error: boolean,
    msg: string,
    data: any,
  }> {
    const response = { error: true, msg: '', data: null };
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.httpClient.get<IGame[]>(API_ROUTES.GAMES, { params: params })
      .pipe(
        map(r => {
          response.msg = 'Get games';
          response.error = false;
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  }


  /**
   * 
   * @returns 
   */
  getGameById(
    idGame: string,
  ): Observable<{
    error: boolean,
    msg: string,
    data: any,
  }> {
    const response = { error: true, msg: '', data: null };
    
    const gameInfoRequest = this.httpClient.get(`${API_ROUTES.GAMES}/${idGame}`);
    const gameTrailersRequest = this.httpClient.get(
      `${API_ROUTES.GAMES}/${idGame}/movies`
    );
    const gameScreenshotsRequest = this.httpClient.get(
      `${API_ROUTES.GAMES}/${idGame}/screenshots`
    );
    
    return forkJoin({
      gameInfoRequest,
      gameTrailersRequest,
      gameScreenshotsRequest
    })
      .pipe(
        map((r:any) => {
          response.msg = 'Get game';
          response.error = false;
          response.data = {
            ...r['gameInfoRequest'],
            screenshots: r['gameScreenshotsRequest']?.results,
            trailers: r['gameTrailersRequest']?.results,
          };
          return response;
        }),
        catchError(this.error)
      );
  }



  /**
   * Handle error
   * @param error 
   * @returns error
   */

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return of({ error: true, msg: errorMessage, data: null });
  }
}
