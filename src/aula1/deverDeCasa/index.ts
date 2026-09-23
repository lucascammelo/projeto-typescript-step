type Conta = {
     titular: string;
     saldo: number;
};

const contaUsuario: Conta = {
    titular: "Lucas",
    saldo: 500,
}

function saque (saldoAtual: number, valorSaque: number) : number {

    return saldoAtual - valorSaque;
}

const saldoFinal = saque(contaUsuario.saldo, 150);

console.log(`O saldo do ${contaUsuario.titular} era de ${contaUsuario.saldo}, depois de sacar 150 o valor ficou ${saldoFinal}`);