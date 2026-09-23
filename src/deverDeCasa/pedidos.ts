enum StatusPedido {
    Novo = "NOVO",
    EmPreparo = "EMPREPARO",
    Enviado = "ENVIADO",
    Entregue = "ENTREGUE",
    Cancelado = "CANCELADO",
}


enum TipoPagamento {
    Pix = "PIX",
    Credito = "CREDITO",
    Debito = "DEBITO"
}

type RegiaoEnvio = "norte" | "nordeste" | "centro-oeste" | "sudeste" | "sul";


function processarPedido(status: StatusPedido) {

    switch (status) {
        case StatusPedido.Novo:
            {console.log("O status do seu pedido é: Novo")}
            break;

        case StatusPedido.EmPreparo:
            { console.log("O status do seu pedido é: Em preparo")}
            break;

        case StatusPedido.Enviado:
            { console.log("O status do seu pedido é: Enviado")}
            break;
        case StatusPedido.Entregue:
            { console.log("O status do seu pedido é: Entregue")}
            break;

        case StatusPedido.Cancelado:
            { console.log("O status do seu pedido é: Cancelado")}
            break;

        default:
            break;
    }
}


function calcularFrete(regiao: RegiaoEnvio){


    switch(regiao){

        case "norte":{
            console.log("O valor de frente para o norte é R$ 70,00")
        }
        break;

        case "nordeste":{
            console.log("O valor de frente para o nordeste é R$ 200,00")
        }
        break;

        case "centro-oeste":{
            console.log("O valor de frente para o centro-oeste é R$ 150,00")
        }
        break;

        case "sudeste":{
            console.log("O valor de frente para o sudeste é R$ 100,00")
        }
        break;

        case "sul":{
            console.log("O valor de frente para o sul é R$ 50,00")
        }
        break;

        default:
            break;
    }

}

function cupomDesconto(valor: number, cupom: string | null): number  {
        const cupomFinal = cupom ?? "Sem desconto";
        console.log(`cupom aplicado: ${cupomFinal}`);
        return cupomFinal !== "Sem desconto" ? valor * 0.9 :  valor;
    };



    type Cliente = {
        nome: string;
        endereco? : {
            rua: string;
            numero: string;
            complemento?: string;
        }
    }

    function mostrarCliente(cliente : Cliente): void {

        
        const complemento = cliente.endereco?.complemento ??  "não informado";
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Rua: ${cliente.endereco?.rua}`);
        console.log(`Numero: ${cliente.endereco?.numero}`);
        console.log(`complemento: ${complemento}`);


    }

    processarPedido(StatusPedido.EmPreparo);
    calcularFrete("sul");
    cupomDesconto(100, null);
    mostrarCliente({nome: "Ana", endereco: {rua: "Rua a", numero: "10"}})