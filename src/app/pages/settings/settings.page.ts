import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonRadio, IonButtons, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular/standalone';
import { IonRadioGroup } from '@ionic/angular/standalone';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonRadioGroup, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonRadio, IonButtons, IonButton]
})
export class SettingsPage implements OnInit {
constructor(private navCtrl: NavController) {}
done() {
  this.navCtrl.back(); 
}
  units: 'metric' | 'us' = 'metric';

  ionViewWillEnter() {
  const saved = localStorage.getItem('units');
  this.units = (saved === 'us' || saved === 'metric') ? saved : 'metric';
  console.log('Settings loaded units:', this.units);
}
  
  saveUnits() {
    localStorage.setItem('units', this.units);
    console.log('Saved units:', this.units);
  }

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

  
}
