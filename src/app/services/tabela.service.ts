import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tabela } from '../models/tabela';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {
  url = 'https://api.api-futebol.com.br/v1/campeonatos/10/tabela'

 
  constructor(private httpClient: HttpClient) { }

  getTabela():Observable<Tabela[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer live_02a219fea5b15d8e712eb9c6928672'
      })
    };

    return this.httpClient.get<Tabela[]>(this.url, httpOptions)
  }

}