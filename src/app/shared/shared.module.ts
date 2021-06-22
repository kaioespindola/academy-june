import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';

// Modules Angular Mateirla
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MovieService } from './services/movies.service';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule
  ],
  exports: [
    CardComponent,
    MatSliderModule,
    MatButtonModule
  ],
  declarations: [
    CardComponent
  ],
  providers: [
    MovieService
  ]
})
export class SharedModule {}
