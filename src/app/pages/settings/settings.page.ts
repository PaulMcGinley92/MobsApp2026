import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonRadio } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonRadio]
})
export class SettingsPage implements OnInit {
  units: 'metric' | 'us' = 'metric';

  ngOnInit() {
    const saved = localStorage.getItem('units');
    if (saved === 'us' || saved === 'metric') {
      this.units = saved;
    } else {
      this.units = 'metric'; // default
      localStorage.setItem('units', this.units);
    }
    console.log('Loaded units:', this.units);
  }

  saveUnits() {
    localStorage.setItem('units', this.units);
    console.log('Saved units:', this.units);
  }
}
