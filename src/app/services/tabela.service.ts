import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tabela } from '../models/tabela';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {
  url = 'https://api.api-futebol.com.br/v1/campeonatos/{campeonato_id}/tabela'
 
 
  constructor(private httpClient: HttpClient) { }

  getTabela():Observable<Tabela[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer test_b95e6f609a47c9e28941936d682513'
      })
    };

    return this.httpClient.get<Tabela[]>(this.url, httpOptions)
  }
}
