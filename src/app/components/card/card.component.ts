import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public nomeUsuario: string = "Carlos";

  constructor() { }

  ngOnInit(): void {
  }

  mudarNome(nome: string) {
    this.nomeUsuario = nome;
  }

}
