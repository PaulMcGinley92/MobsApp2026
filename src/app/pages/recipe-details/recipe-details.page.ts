import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { SpoonacularService } from 'src/app/services/spoonacular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecipeDetailsPage {

  recipe: any;

  constructor(private route: ActivatedRoute, private api: SpoonacularService) {}

  ionViewWillEnter() {
    const idStr = this.route.snapshot.paramMap.get('id');
    const id = Number(idStr);

    console.log('Details page id:', id, 'raw:', idStr);

/*if (!idStr || Number.isNaN(id) || id <= 0) {
  console.log('BAD ID from route:', idStr);
  return;
}*/

    this.api.getRecipeInformation(id).subscribe({
      next: (data) => {
        console.log('Details API returned:', data);
        this.recipe = data;
      },
      error: (err) => console.log('Details API ERROR:', err),
    });
  }
}
