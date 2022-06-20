import { Component, OnInit } from '@angular/core';
import { Tabela } from 'src/app/models/tabela';
import { TabelaService } from 'src/app/services/tabela.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {


listaJogos: Tabela[] = [] 
  constructor(private tabelaService: TabelaService) { }

  ngOnInit(): void {
    this.carregarTabela()
  }



  carregarTabela() {
    this.tabelaService.getTabela().subscribe((jogosRecebidos: Tabela[]) =>{
      this.listaJogos = jogosRecebidos;
      console.log(this.listaJogos)
    })
  }

}
