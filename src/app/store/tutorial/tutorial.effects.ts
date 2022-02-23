import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { UPDATE_TUTORIAL } from './tutorial.actions';

@Injectable()
export class TutorialEffects {

  loadTutorials$ = createEffect((): any => {
    const returnVal = { type: '[Tutorial] Add', id: 0, title: 'hello', val: 10 };
    return this.actions$.pipe(
      ofType(UPDATE_TUTORIAL),
      exhaustMap(() => this.http.get('https://pokeapi.co/api/v2/pokemon/').pipe(
        map((resp) => {
          console.log('resp', resp);
          return returnVal;
        }),
        catchError(() => of(returnVal))
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private http: HttpClient) { }
};
