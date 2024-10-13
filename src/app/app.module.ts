import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { AdvertisementComponent } from './component/advertisement/advertisement.component';
import { ButtonComponent } from './component/button/button.component';
import { CardComponent } from './component/card/card.component';
import { CardListComponent } from './component/card-list/card-list.component';
import { HeaderComponent } from './component/header/header.component';
import { OrderComponent } from './component/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdvertisementComponent,
    ButtonComponent,
    CardComponent,
    CardListComponent,
    HeaderComponent,
    OrderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
