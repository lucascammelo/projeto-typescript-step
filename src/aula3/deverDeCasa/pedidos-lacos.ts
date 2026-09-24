enum StatusPedidoLacos  {
  Novo = "NOVO",
  EmPreparo = "EMPREPARO",
  Enviado = "ENVIADO",
  Entregue = "ENTREGUE",
  Cancelado = "CANCELADO"
};


type Pedido1 = {
    id: number;
    produto: string;
    status: StatusPedidoLacos;
}

const pedidos1: Pedido1[] = [
    {id: 1, produto: "tv", status: StatusPedidoLacos.Cancelado},
    {id: 2, produto: "cama", status: StatusPedidoLacos.Cancelado},
    {id: 3, produto: "geladeira", status: StatusPedidoLacos.EmPreparo},
    {id: 4, produto: "microndas", status: StatusPedidoLacos.Entregue},
    {id: 5, produto: "mesa", status: StatusPedidoLacos.Enviado},
    {id: 6, produto: "cadeira", status: StatusPedidoLacos.Enviado},
    {id: 7, produto: "pia", status: StatusPedidoLacos.Novo},
    {id: 8, produto: "espelho", status: StatusPedidoLacos.Novo},
    
];

for (const pedido of pedidos1) {
    console.log(`id: ${pedido.id}: - produto: ${pedido.produto} - status: ${pedido.status}`);
}


for(const pedido of pedidos1){
    if(pedido.status == StatusPedidoLacos.Cancelado){
        console.log(`Pedido Id: ${pedido.id} é cancelado. Pulando...`);
        continue;
    }

    console.log(`Processando pedido id: ${pedido.id}`);
}


let Novo: number = 0;
let EmPreparo: number = 0;
let Enviado: number = 0;
let Entregue: number = 0;
let Cancelado: number = 0;

for(const pedido of pedidos1){
    switch(pedido.status){

        case StatusPedidoLacos.Novo:{
            Novo ++;
        }
        break;
        case StatusPedidoLacos.EmPreparo:{
            EmPreparo ++;
        }
        break;
        case StatusPedidoLacos.Enviado:{
            Enviado ++;
        }
        break;
        case StatusPedidoLacos.Entregue:{
            Entregue ++;
        }
        break;
        case StatusPedidoLacos.Cancelado:{
            Cancelado ++;
        }
        break;
    }

}
console.log(`Novo: ${Novo} - Em preparo: ${EmPreparo} -  Enviado: ${Enviado} - Entregue: ${Entregue} - Cancelado: ${Cancelado}`);


let estaEmPreparo: boolean = false;

for (const pedido of pedidos1){
    if(pedido.status == StatusPedidoLacos.EmPreparo && !estaEmPreparo){      
        console.log(`Primeiro pedido em preparo encontrado: id:${pedido.id}, produto: ${pedido.produto}`)      
        estaEmPreparo = true;
    }
    
}

console.log("--------Relatório--------");
console.log(`Novo: ${Novo}`);
console.log(`Em preparo: ${EmPreparo}`);
console.log(`Enviado: ${Enviado}`);
console.log(`Entregue: ${Entregue}`);
console.log(`Cancelado: ${Cancelado}`);