import { CondicaoSimples } from './condicao-simples';
import { CondicaoComposta } from './condicao-composta';

export class GridItem {
    public condicaoSimples: CondicaoSimples;
    public condicaoComposta: CondicaoComposta
    public itemComposto: Boolean;

    constructor(condicaoSimples?: CondicaoSimples, condicaoComposta?: CondicaoComposta) {
        
        if(condicaoSimples != null && condicaoSimples != undefined) {
            this.condicaoSimples = condicaoSimples;
            this.itemComposto = false;
        }

        if(condicaoComposta != null && condicaoComposta != undefined) {
            this.condicaoComposta = condicaoComposta;
            this.itemComposto = true;
        }

        
    }
}