import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OnDestroySubs } from './shared/onDestroySubs.component';
import { Tutorial } from './store/tutorial/models/tutorial.model';
import { selectTutorials } from './store/tutorial/tutorial.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  extends OnDestroySubs {
  tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store) {
    super();

    this.tutorials$ = this.store.pipe(
      select(selectTutorials)
    );

    this.tutorials$.pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe(tutorials => {
      console.log('tutorials from app: ', tutorials);
    });
  }
}
