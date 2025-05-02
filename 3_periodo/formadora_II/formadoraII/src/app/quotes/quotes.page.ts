import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RefresherCustomEvent } from '@ionic/core';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonListHeader,
  IonRefresher,
  IonRefresherContent,
  IonSkeletonText,
} from '@ionic/angular/standalone';
import { QuotesService } from '../services/quotes.service';
import { Quote } from '../../types/quotes';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
  standalone: true,
  imports: [
    IonSkeletonText,
    IonRefresherContent,
    IonRefresher,
    IonTitle,
    IonItem,
    IonList,
    IonContent,
    CommonModule,
    FormsModule,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonListHeader,
  ],
})
export class QuotesPage implements OnInit {
  public quotes: Observable<Quote[]> = new Observable<Quote[]>();

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quotes = this.quotesService.RandomQuotes();
  }

  refreshRandomQuotes(event: RefresherCustomEvent) {
    this.quotes = this.quotesService.RandomQuotes();
    (event.target as HTMLIonRefresherElement).complete();
  }
}
