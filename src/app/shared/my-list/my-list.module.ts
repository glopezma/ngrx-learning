import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListComponent } from './my-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyListComponent],
  exports: [MyListComponent]
})
export class MyListModule { }
