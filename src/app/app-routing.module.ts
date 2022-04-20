import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { ListLandingPageComponent } from './list-landing-page/list-landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'contact-list' },
      { path: 'contact-list', component: ListLandingPageComponent },
      { path: 'add-contact', component: AddNewContactComponent },
      { path: 'edit-contact/:id', component: AddNewContactComponent },

      { path: '**', component: NotFoundComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
