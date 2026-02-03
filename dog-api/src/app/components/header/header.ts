import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
//Criando um evento de saida para a informação do filho para o pai
  @Output() buscaRealizada = new EventEmitter()

  //Método que vai verificar se o nome é valido para ser exportado
  buscar(nomeRaca: string){
     console.log(nomeRaca);
     //Criando uma condicional que vai remover os espaços da raça do cachorro.
    if (nomeRaca.trim()){
//referenciando o buscaRealizada e usando o metodo emit para dar como saida a raça do cachorro
      this.buscaRealizada.emit(nomeRaca)
    }
  }
  

}
