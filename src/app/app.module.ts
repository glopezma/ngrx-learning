import { MyListModule } from './shared/my-list/my-list.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgRxStoreModule } from './store/ngrx-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRxStoreModule,
    MyListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
