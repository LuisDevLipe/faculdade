import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

import { Quote } from '../../types/quotes';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient) {}

  RandomQuotes(nQuotes: number = 10): Observable<Quote[]> {
    return this.http.get<Quote[]>(
      'https://dummyjson.com/quotes/random/' + nQuotes
    );
  }
}
// https://angular.dev/guide/http/making-requests#best-practices

/* 
Referências

IONIC. Ionic Tabs. Disponível em: <https://ionicframework.com/docs/api/tab-bar>. Acesso em: 02 maio 2025.

IONIC. Documentação de Componentes do Ionic. Disponível em: <https://ionicframework.com/docs/api/>. Acesso em: 02 maio 2025.

ANGULAR. Angular Dev Best Practices. Disponível em: <https://angular.dev/guide/http/making-requests#best-practices>. Acesso em: 02 maio 2025.

JAINDEEP. Difference between constructor and ngOnInit. Stack Overflow, 2016. Disponível em: <https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit>. Acesso em: 02 maio 2025.
*/