import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-landing-page',
  templateUrl: './list-landing-page.component.html',
  styleUrls: ['./list-landing-page.component.scss'],
})
export class ListLandingPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  addContact() {
    // this.route.
  }
}
