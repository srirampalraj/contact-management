import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListLandingPageComponent } from './list-landing-page/list-landing-page.component';
import { MaterialModule } from './material.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListLandingPageComponent,
    NotFoundComponent,
    AddNewContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
