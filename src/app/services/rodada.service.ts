import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from '../models/partida';
import { Rodada } from '../models/rodada';
@Injectable({
  providedIn: 'root',
})
export class RodadaService {
  url ='https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/15'


  constructor(private httpClient: HttpClient) {}

  getRodada(): Observable<Rodada> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer live_02a219fea5b15d8e712eb9c6928672'
      }),
    };

    return this.httpClient.get<Rodada>(this.url, httpOptions);
  }
}
