import React, { useState } from 'react';
import InvestimentoForm from '../components/InvestimentoForm';  // Importa o componente de formulário de investimento
import ListagemInvestimentos from './ListagemInvestimentos';  // Importa o componente que lista os investimentos
import GraficoInvestimentos from '../components/GraficoInvestimentos';  // Importa o gráfico


const CadastroInvestimentos = () => {
  // Definindo o estado para armazenar os investimentos cadastrados
  const [investimentos, setInvestimentos] = useState([]);
  
  // Definindo o estado para controle de qual investimento está sendo editado
  const [investimentoEditando, setInvestimentoEditando] = useState(null);
  
  // Definindo o estado para armazenar mensagens de sucesso ou erro
  const [mensagem, setMensagem] = useState("");

  // Função para adicionar um novo investimento
  const adicionarInvestimento = (investimento) => {
    // Adiciona o novo investimento à lista de investimentos
    setInvestimentos([...investimentos, investimento]);
    setMensagem("Investimento cadastrado com sucesso!");  // Mensagem de sucesso
    setTimeout(() => setMensagem(""), 3000);  // A mensagem some após 3 segundos
  };

  // Função para atualizar um investimento existente
  const atualizarInvestimento = (investimentoAtualizado) => {
    // Atualiza o investimento na posição correta na lista de investimentos
    const investimentosAtualizados = investimentos.map((investimento, index) => 
      index === investimentoEditando ? investimentoAtualizado : investimento
    );
    setInvestimentos(investimentosAtualizados);
    setInvestimentoEditando(null); // Limpa o estado de edição após salvar
    setMensagem("Investimento atualizado com sucesso!");  // Mensagem de sucesso
    setTimeout(() => setMensagem(""), 3000);  // A mensagem some após 3 segundos
  };

  // Função para iniciar a edição de um investimento, passando o índice do item
  const editarInvestimento = (index) => {
    setInvestimentoEditando(index);  // Define qual investimento será editado
  };

  // Função para excluir um investimento
  const excluirInvestimento = (index) => {
    // Filtra o investimento a ser excluído da lista
    const investimentosAtualizados = investimentos.filter((_, i) => i !== index);
    setInvestimentos(investimentosAtualizados);
    setMensagem("Investimento excluído com sucesso!");  // Mensagem de sucesso
    setTimeout(() => setMensagem(""), 3000);  // A mensagem some após 3 segundos
  };

  return (
    <div className="wrapper">
      <h1>Cadastro de Investimentos</h1>
      
      {/* Exibe a mensagem de sucesso/erro, caso exista */}
      {mensagem && <div className="mensagem">{mensagem}</div>}

      <div className="container"> 
        {/* Componente de formulário para adicionar ou editar investimentos */}
        <InvestimentoForm 
          adicionarInvestimento={adicionarInvestimento} 
          investimentoEditando={investimentoEditando !== null ? investimentos[investimentoEditando] : null} 
          atualizarInvestimento={atualizarInvestimento}
        />
      </div>

      <div className="container">
        {/* Componente que lista os investimentos cadastrados */}
        <ListagemInvestimentos 
          investimentos={investimentos} 
          editarInvestimento={editarInvestimento} 
          excluirInvestimento={excluirInvestimento} 
        />

      <div className="container">
      <GraficoInvestimentos investimentos={investimentos} />  {/* Exibe o gráfico de investimentos */}
      </div>

      </div>
    </div>
  );
};

export default CadastroInvestimentos;
