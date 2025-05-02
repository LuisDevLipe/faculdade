import { Component } from '@angular/core';
import {
  IonApp,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { informationCircle, home, cube } from 'ionicons/icons';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonLabel, IonIcon, IonTabButton, IonTabBar, IonTabs, IonApp],
})
export class AppComponent {
  constructor(private menuctl: MenuController) {
    addIcons({ home, informationCircle, cube });
  }
}
