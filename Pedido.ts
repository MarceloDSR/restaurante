import { PratoPrincipal } from "./PratoPrincipal"
import { TipoBebida } from "./TipoBebida"
import { TipoSobremesa } from "./TipoSobremesa"
export class Pedido{

    idPedido: number
    bebida: TipoBebida
    pratoPrincipal: PratoPrincipal
    sobremesas: TipoSobremesa

    constructor(idPedido: number, bebida: TipoBebida, pratoPrincipal: PratoPrincipal, sobremesas: TipoSobremesa){
        this.idPedido =  idPedido
        this.bebida = bebida
        this.pratoPrincipal = pratoPrincipal
        this.sobremesas = sobremesas
    }

    fazerPedido(){
        
    }
}
