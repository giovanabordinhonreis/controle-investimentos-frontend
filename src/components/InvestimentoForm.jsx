import React, { useState, useEffect } from 'react';

const InvestimentoForm = ({ adicionarInvestimento, investimentoEditando, atualizarInvestimento }) => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [erroValor, setErroValor] = useState(''); // Estado para mensagem de erro de valor
  
  // Preenche os campos automaticamente ao editar
  useEffect(() => {
    if (investimentoEditando !== null) {
      // Preenchendo os campos com os dados do investimento
      setNome(investimentoEditando.nome);
      setTipo(investimentoEditando.tipo);
      setValor(investimentoEditando.valor);
      setData(investimentoEditando.data);
    }
  }, [investimentoEditando]); // Recarrega quando o investimentoEditando mudar

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se o valor é maior que 0
    if (parseFloat(valor) <= 0) {
      setErroValor("O valor do investimento deve ser maior que 0!"); // Exibe a mensagem de erro
      return;
    }

    setErroValor(''); // Limpa o erro se o valor for válido

    const novoInvestimento = { nome, tipo, valor, data };

    if (investimentoEditando !== null) {
      // Se estamos editando, atualiza o investimento
      atualizarInvestimento(novoInvestimento);
    } else {
      // Se não estamos editando, adiciona o novo investimento
      adicionarInvestimento(novoInvestimento);
    }

    // Limpar os campos após salvar
    setNome('');
    setTipo('');
    setValor('');
    setData('');
  };

  // Definindo a data máxima como o dia de hoje para evitar datas futuras
  const dataMaxima = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nome do investimento" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
        required 
      />
      
      {/* Tipo de fundo: campo de texto para o usuário digitar */}
      <input 
        type="text" 
        placeholder="Tipo do fundo (ex: Ações, Renda Fixa)" 
        value={tipo} 
        onChange={(e) => setTipo(e.target.value)} 
        required 
      />
      
      <input 
        type="number" 
        placeholder="Valor investido" 
        value={valor} 
        onChange={(e) => setValor(e.target.value)} 
        required 
      />
      
      {/* Exibe a mensagem de erro, se houver */}
      {erroValor && <div className="erro">{erroValor}</div>}
      
      {/* Impedindo a seleção de datas futuras */}
      <input 
        type="date" 
        value={data} 
        onChange={(e) => setData(e.target.value)} 
        required 
        max={dataMaxima} 
      />
      
      <button type="submit" className="add">Salvar</button>
    </form>
  );
};

export default InvestimentoForm;
