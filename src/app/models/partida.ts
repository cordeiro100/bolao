export interface Partida {
    partida_id: number;
    placar: string;
        time_mandante: {
          time_id: number;
          nome_popular: string;
          sigla: string;
          escudo: string;
        }
        time_visitante: {
          time_id: number;
          nome_popular: string;
          sigla: string;
          escudo: string;
        }

}

  
  
