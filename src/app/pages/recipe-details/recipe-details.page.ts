import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { SpoonacularService } from 'src/app/services/spoonacular';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList, IonItem, IonLabel]
})
export class RecipeDetailsPage {

  recipe: any;
  ingredients: any[] = [];
  steps: any[] = [];
  units: 'metric' | 'us' = 'metric';

  constructor(private route: ActivatedRoute, private api: SpoonacularService) {}
  
  ionViewWillEnter() {
    

     const saved = localStorage.getItem('units');
this.units = (saved === 'us' || saved === 'metric') ? saved : 'metric';
console.log('Details using units:', this.units);

const idStr = this.route.snapshot.paramMap.get('id');
    const id = Number(idStr);


    console.log('Details page id:', id, 'raw:', idStr);

if (!idStr || Number.isNaN(id) || id <= 0) {
  console.log('BAD ID from route:', idStr);
  return;
}
   

    this.api.getRecipeInformation(id).subscribe({
      next: (data: any) => {
        console.log('Details API returned:', data);
        this.recipe = data;
        this.ingredients = data.extendedIngredients ?? [];
        this.steps = data.analyzedInstructions?.[0]?.steps ?? [];
      },
      error: (err: any) => console.log('Details API ERROR:', err),
    });
  }
}
