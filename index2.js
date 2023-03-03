let eu = {
    receitas: [2200,450,650,35],
    despesas: [1200,200,150,110,50,300]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculo() {
    const calculoreceitas = sum(eu.receitas)
    const calculodespesas = sum(eu.despesas)

    const total = calculoreceitas - calculodespesas

    const saldoOK = total >= 0;

    let Balanco = 'Negativo'

    if(saldoOK) {
        Balanco = 'Positivo'
    }

    console.log(`Seu Saldo é ${Balanco}: ${total.toFixed(2)}R$`);
}

calculo()