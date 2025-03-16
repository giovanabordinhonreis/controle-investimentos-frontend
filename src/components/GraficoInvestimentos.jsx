import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar os elementos necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoInvestimentos = ({ investimentos }) => {
  // Contagem dos tipos de investimentos
  const tiposDeInvestimentos = investimentos.reduce((acc, investimento) => {
    acc[investimento.tipo] = (acc[investimento.tipo] || 0) + 1;
    return acc;
  }, {});

  // Preparar os dados para o gráfico
  const data = {
    labels: Object.keys(tiposDeInvestimentos),
    datasets: [
      {
        data: Object.values(tiposDeInvestimentos),
        backgroundColor: ['#4CAF50', '#FFC107', '#2196F3', '#FF5722'], // Cores diferentes para cada tipo
      },
    ],
  };

  return (
    <div>
      <h2>Distribuição dos Tipos de Investimentos</h2>
      <Pie data={data} />
    </div>
  );
};

export default GraficoInvestimentos;
