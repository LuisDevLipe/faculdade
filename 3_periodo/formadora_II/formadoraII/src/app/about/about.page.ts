import { Component, OnInit } from '@angular/core';
import {
  IonContent,IonHeader,IonToolbar,
  IonTitle,IonCard,IonCardHeader,
  IonCardTitle,IonCardContent,IonList,
  IonItem,IonCardSubtitle,IonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  imports: [
    IonText,IonCardSubtitle,IonItem,
    IonList,IonCardContent,IonCardTitle,
    IonCardHeader,IonCard,IonContent,
    IonHeader,IonToolbar,IonTitle,
  ],
})
export class AboutPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
