import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  valor;
  exibeTabela: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @Input() valorInicial: number = 5;
}
