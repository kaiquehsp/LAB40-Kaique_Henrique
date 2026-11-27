// Funcionalidade 13: Conversor para minúsculas.
// Objetivo: Converte texto para letras minúsculas.
// Exemplo de entrada: { texto: 'CI/CD' }
// Implemente conforme as regras e critérios do enunciado fornecido pelo professor.

const implemented = true;

// Desenvolva a regra de negócio e valide todos os dados de entrada.
function execute(input) {
 const {texto}=input||{}; if(typeof texto!=='string') throw new Error('Texto deve ser string.');
    return { resultado: texto.toLocaleLowerCase('pt-BR') };

  void input;
  throw new Error("Funcionalidade ainda não implementada.");
}

// Mantém o contrato de integração utilizado pela API central.
module.exports = {
  id: 13,
  name: "Conversor para minúsculas",
  description: "Converte texto para letras minúsculas.",
  implemented,
  execute
};
