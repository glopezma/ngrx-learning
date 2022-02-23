import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TutorialEffects } from './tutorial/tutorial.effects';
import { tutorialDataReducer } from './tutorial/tutorial.reducer';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    StoreModule.forRoot({
      tutorial: tutorialDataReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([
      TutorialEffects
    ])
  ],
  providers: [],
  bootstrap: []
})
export class NgRxStoreModule { }
