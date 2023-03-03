

const receitas = [35 + 450 + 2200 + 650];
console.log(`A soma das receitas são: ${receitas} Reais.`);

const despesas = [1200 + 200 + 150 + 120 + 50 + 300];
console.log(`A soma das despesas são: ${despesas} Reais.`)

const sum = function(receitas, despesas) {
    let resultado = receitas - despesas
    return resultado
}

function status1() {

    const total = receitas - despesas

    const statusok = total >= 0;
    const statusnot = total <= 0;

    if(statusok){
        console.log(`O Resultado é R$ ${sum(receitas,despesas)}, STATUS: POSITIVO `)
    } else if (statusnot) {
        console.log('Status: NEGATIVO!')
    }

}

status1()