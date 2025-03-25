// Reduce é um método que reduz um array a um único valor
const foguetes = [
  { pais: "Brasil", lancamentos: 10 },
  { pais: "Estados Unidos", lancamentos: 50 },
  { pais: "Russia", lancamentos: 30 },
  { pais: "China", lancamentos: 40 },
];

const totalDeLancamentos = foguetes.reduce((acumulador, foguete) => {
  return acumulador + foguete.lancamentos;
}, 0);

console.log(`Total de lançamentos: ${totalDeLancamentos}`);
