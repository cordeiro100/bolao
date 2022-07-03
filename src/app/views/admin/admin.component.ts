import { Component, OnInit } from '@angular/core';
import { Aposta } from 'src/app/models/aposta';
import { Rodada } from 'src/app/models/rodada';
import { RodadaService } from 'src/app/services/rodada.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
apostas: any[]
  constructor(private rodadaService: RodadaService) { }

  ngOnInit(): void {
    this.rodadaService.getAposta().subscribe((apostas: Aposta[])=>{
      console.table(apostas);
      this.apostas = apostas;
    })
  }


}
