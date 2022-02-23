import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Tutorial } from 'src/app/store/tutorial/models/tutorial.model';
import { ADD_TUTORIAL, REMOVE_TUTORIAL, RESET_TUTORIAL, UPDATE_TUTORIAL } from 'src/app/store/tutorial/tutorial.actions';
import { selectTutorials } from 'src/app/store/tutorial/tutorial.selectors';
import { OnDestroySubs } from '../onDestroySubs.component';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html'
})
export class MyListComponent extends OnDestroySubs {
  tutorials: Tutorial[];
  tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store) {
    super();

    this.tutorials$ = this.store.pipe(
      select(selectTutorials),
      takeUntil(this.componentDestroyed$)
    );
  }

  increment() {
    this.store.dispatch(ADD_TUTORIAL({
      id: 0,
      title: 'new title',
      val: this.tutorials.length
    }));
  }

  decrement() {
    this.store.dispatch(REMOVE_TUTORIAL({ id: this.tutorials.length - 1 }));
  }

  update() {
    this.store.dispatch(UPDATE_TUTORIAL({ id: 0, title: 'new title', val: 99 }));
  }

  reset() {
    this.store.dispatch(RESET_TUTORIAL());
  }
}
