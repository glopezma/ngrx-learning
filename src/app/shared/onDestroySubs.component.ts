import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-on-destroy-subs-do-not-use-this',
  template: '<div></div>',
})
export class OnDestroySubs implements OnDestroy {
  private componentDestroyedSubject = new Subject<boolean>();
  protected componentDestroyed$ = this.componentDestroyedSubject.asObservable();

  ngOnDestroy() {
    this.componentDestroyedSubject.next(true);
    this.componentDestroyedSubject.complete();
  }
}
