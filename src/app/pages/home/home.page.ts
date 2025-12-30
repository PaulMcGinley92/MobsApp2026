import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar,IonTitle,IonContent,IonButtons,IonButton,IonIcon,
} from '@ionic/angular/standalone';
import { IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { SpoonacularService, SpoonacularSearchResult } from '../../services/spoonacular';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
imports: [
  CommonModule,

  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem, IonLabel, IonInput,
  FormsModule,
  IonCard,
IonCardHeader,
IonCardTitle,
IonCardContent,
  RouterLink
],
})
export class HomePage implements OnInit {

  constructor(private api: SpoonacularService) { }

  ngOnInit() {
  }
  ingredientsText = '';

searchRecipes() {
  console.log('Searching for:', this.ingredientsText);

  const q = this.ingredientsText.trim();
  if (!q) return;

  this.api.searchRecipes(q).subscribe({
    next: (data) => {
      console.log('API returned:', data);
      this.recipes = data.results ?? [];
      console.log('Recipes saved:', this.recipes.length);
    },
    error: (err) => {
      console.log('API ERROR:', err);
    }
  });
}

recipes: SpoonacularSearchResult[] = [];



}
