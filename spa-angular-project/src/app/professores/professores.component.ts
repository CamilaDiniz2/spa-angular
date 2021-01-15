import { Component, OnInit } from '@angular/core';
import { professores } from '../model/professores';

@Component({
  selector: 'spa-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {
  numProfessores: number = 7;
  mostrarProfessores: boolean = false;

  listaProfessores: professores[] = [
    {
      nome: 'Carlos Sampaio',
      idade: 50,
      disciplina: 'matematica',
      curso: 'Matematica',
    },
    {
      nome: 'Valéria Pereira',
      idade: 42,
      disciplina: 'Engenharia de Software',
      curso: 'ADS',
    },
    {
      nome: 'Luisa Dantas',
      idade: 30,
      disciplina: 'programação estruturada',
      curso: 'Informática',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  aumentarValor() {
    this.numProfessores++;
  }

  diminuirValor() {
    if (this.numProfessores > 0) {
      this.numProfessores--;
    }
  }

  resetarValor() {
    this.numProfessores = 0;
  }

  mostraProfessores() {
    if (this.mostrarProfessores == false) {
      this.mostrarProfessores = true;
    } else {
      this.mostrarProfessores = false;
    }
  }
}
