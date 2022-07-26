function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // ou
    const comprarTv50 = trabalho1 && trabalho2 // se
   // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor (bit a bit)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))