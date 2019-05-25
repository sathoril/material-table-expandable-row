import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { GridItem } from './entities/grid-item';
import { CondicaoSimples } from './entities/condicao-simples';
import { CondicaoComposta } from './entities/condicao-composta';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class AppComponent {
  // MatPaginator Output
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageEvent: PageEvent;
  
  title = 'material-table-app';

  gridItens: GridItem[] = [];

  dataSource: MatTableDataSource<GridItem>;
  displayedColumns: string[] = ['id','nome','descricao'];

  expandedElement: CondicaoSimples[] | null;

  constructor(public changeDetectorRefs: ChangeDetectorRef) {

    for (let i = 0; i < 3; i++) {
      let novoItem: GridItem;

      if(i%2 == 0) {
        let novaCondicaoSimples = new CondicaoSimples(i, 'Condicao Simples ' + i, 'É uma condição simples');
         novoItem = new GridItem(novaCondicaoSimples, null);

        this.gridItens.push(novoItem);
      }
      else {
        let novaCondicaoComposta: CondicaoComposta;
        let novasCondicoesSimples: CondicaoSimples[] = [];

        for (let j = 0; j < 3; j++) {
          let novaCondicaoSimples = new CondicaoSimples(i, 'Condicao Simples ' + i, 'É uma condição simples');
          novasCondicoesSimples.push(novaCondicaoSimples);
        }

        novaCondicaoComposta = new CondicaoComposta(novasCondicoesSimples);
        novoItem = new GridItem(null, novaCondicaoComposta);
        this.gridItens.push(novoItem);
      }
    }

    this.dataSource = new MatTableDataSource(this.gridItens);
  }

  adicionarItemAoGrid() {
    debugger;
    var numero = Math.floor(Math.random() * 2) + 1;

    let novoItem: GridItem;

    if(numero%2 == 0)
    {
      let novaCondicaoSimples = new CondicaoSimples(numero, 'Condicao Simples ' + numero, 'É uma condição simples');
      novoItem = new GridItem(novaCondicaoSimples, null);

      this.gridItens.push(novoItem);
    }
    else {
      let novaCondicaoComposta: CondicaoComposta;
        let novasCondicoesSimples: CondicaoSimples[] = [];

        for (let j = 0; j < 3; j++) {
          let novaCondicaoSimples = new CondicaoSimples(numero, 'Condicao Simples ' + numero, 'É uma condição simples');
          novasCondicoesSimples.push(novaCondicaoSimples);
        }

        novaCondicaoComposta = new CondicaoComposta(novasCondicoesSimples);
        novoItem = new GridItem(null, novaCondicaoComposta);
        this.gridItens.push(novoItem);
    }

    this.atualizarGrid();
  }

  atualizarGrid() {
    this.dataSource.paginator = this.paginator;
  }
}
