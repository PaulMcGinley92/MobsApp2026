import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonList, IonItem, IonLabel, IonThumbnail
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonList, IonItem, IonLabel, IonThumbnail
  ],
})
export class FavouritesPage {
  favourites: any[] = [];

  constructor(private router: Router) {}

  ionViewWillEnter() {
    const raw = localStorage.getItem('favourites');
    this.favourites = raw ? JSON.parse(raw) : [];
    console.log('Favourites loaded:', this.favourites);
  }

  openDetails(id: number) {
    this.router.navigate(['/recipe-details', id]);
  }
}
