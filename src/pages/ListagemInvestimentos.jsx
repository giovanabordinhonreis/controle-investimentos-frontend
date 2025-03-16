import React from 'react';

const ListagemInvestimentos = ({ investimentos, editarInvestimento, excluirInvestimento }) => {
  return (
    <div>
      <h2>Listagem de Investimentos</h2>

      {/* Tabela para exibir os investimentos */}
      <table>
        <thead>
          <tr>
            {/* Cabeçalho da tabela com os títulos das colunas */}
            <th>Nome</th>
            <th>Tipo</th>
            <th>Valor Investido</th>
            <th>Data do Investimento</th>
            <th>Ações</th> {/* Coluna para os botões de edição e exclusão */}
          </tr>
        </thead>
        <tbody>
          {/* Mapeia os investimentos e exibe cada um em uma linha da tabela */}
          {investimentos.map((investimento, index) => (
            <tr key={index}>
              {/* Exibe as informações de cada investimento */}
              <td>{investimento.nome}</td>
              <td>{investimento.tipo}</td>
              <td>{investimento.valor}</td>
              <td>{investimento.data}</td>
              <td>
                {/* Botão para editar o investimento */}
                <button onClick={() => editarInvestimento(index)}>Editar</button>

                {/* Botão para excluir o investimento */}
                <button onClick={() => excluirInvestimento(index)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListagemInvestimentos;
