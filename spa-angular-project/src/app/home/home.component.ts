import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  valor: any;
  exibeTabela: boolean = false;

  listaAlunos: alunos[] = [
    {
      nome: 'Camila',
      idade: 31,
      email: 'camila@email.com',
      curso: 'Análise e desenvolvimento de sistemas',
    },
    {
      nome: 'Aline',
      idade: 31,
      email: 'aline@email.com',
      curso: 'Análise e desenvolvimento de sistemas',
    },
    {
      nome: 'Sushi',
      idade: 3,
      email: 'sushi@email.com',
      curso: 'Ciência da computação',
    },
  ];
  constructor() {}
  pageTitle: string = 'Minha aplicação';
  ngOnInit(): void {
    this.valor = 10;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela() {
    this.exibeTabela = true;
  }
}
