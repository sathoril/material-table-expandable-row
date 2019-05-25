import { CondicaoSimples } from './condicao-simples';

export class CondicaoComposta {
    public condicoesSimples: CondicaoSimples[];

    constructor(condicoesSimples: CondicaoSimples[]) {

        if(condicoesSimples != null && condicoesSimples != undefined && condicoesSimples.length > 0) {
            this.condicoesSimples = [];

            for (let index = 0; index < condicoesSimples.length; index++) {
                let novaCondicao = new CondicaoSimples(condicoesSimples[index].id, condicoesSimples[index].nome, condicoesSimples[index].descricao);
                this.condicoesSimples.push(novaCondicao);
            }
        }
    }
}