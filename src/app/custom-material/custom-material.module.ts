import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  imports: [
    MatMomentDateModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  exports: [
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class CustomMaterialModule {
}