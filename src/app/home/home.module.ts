import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatCardModule, MatButtonModule } from "@angular/material";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
