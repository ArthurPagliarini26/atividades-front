let dadosPessoais = {
  nome: "Ana Silva",
  idade: 30
};

let dadosProfissionais = {
  cargo: "Engenheira de Software",
  empresa: "TechSolutions"
};

let funcionarioCompleto = {
  ...dadosPessoais,
  ...dadosProfissionais
};

console.log(funcionarioCompleto);
