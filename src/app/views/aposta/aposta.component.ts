import { Component, OnInit } from '@angular/core';
import { Partida } from 'src/app/models/partida';
import { Rodada } from 'src/app/models/rodada';
import { RodadaService } from 'src/app/services/rodada.service';

@Component({
  selector: 'app-aposta',
  templateUrl: './aposta.component.html',
  styleUrls: ['./aposta.component.css'],
})
export class ApostaComponent implements OnInit {

rodadaRecebida: Rodada;
  constructor(private rodadaService: RodadaService) {}

  ngOnInit(): void {
    this.carregarRodada();
  }
  
  
  carregarRodada() {
    this.rodadaService.getRodada().subscribe((rodadaRecebida: Rodada) => {
      this.rodadaRecebida = rodadaRecebida;
   });
  }
}
