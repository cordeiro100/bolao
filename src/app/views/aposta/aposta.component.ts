import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Partida } from 'src/app/models/partida';
import { Rodada } from 'src/app/models/rodada';
import { RodadaService } from 'src/app/services/rodada.service';
import { Aposta } from 'src/app/models/aposta';
@Component({
  selector: 'app-aposta',
  templateUrl: './aposta.component.html',
  styleUrls: ['./aposta.component.css'],
})
export class ApostaComponent implements OnInit {
nome: string;
celular: number;
rodadaRecebida: Rodada;
cadastroForm: FormGroup;
aposta: any[]
  constructor(private rodadaService: RodadaService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      celular: ['', [Validators.required]]
    })
this.rodadaService.getAposta().subscribe((apostas: Aposta[]) =>{
  console.table(apostas);

  this.aposta = apostas
})


    this.carregarRodada();
  }
  
  
  carregarRodada() {
    this.rodadaService.getRodada().subscribe((rodadaRecebida: Rodada) => {
      this.rodadaRecebida = rodadaRecebida;
   });
  }

  
  confirmarAposta(){
    this.rodadaService.addAposta(this.cadastroForm.value).then(() => this.cadastroForm.reset())
  }
  
}
