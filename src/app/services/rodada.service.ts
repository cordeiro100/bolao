import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from '../models/partida';
import { Rodada } from '../models/rodada';
import { Aposta } from '../models/aposta';
import { collectionData, Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class RodadaService {
  url ='https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/15'


  constructor(private httpClient: HttpClient, private firestore: Firestore) {}

  addAposta(apostas: Aposta){
    const aposta = collection(this.firestore, 'apostas');
    return addDoc(aposta,apostas )
  }
  
  getAposta():Observable<Aposta[]>{
    const dadosAposta = collection(this.firestore, 'apostas');
    return collectionData(dadosAposta, {idField: 'id'}) as Observable<Aposta[]>
  }

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
