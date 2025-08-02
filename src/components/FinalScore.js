import React from 'react';

function FinalScore({ scores, totalScore, coins }) {
  return (
    <div className="final-score">
      <h2>Resultado Final</h2>
      
      <div className="total-score">
        {totalScore}
      </div>
      
      <div className="score-breakdown">
        <div className="breakdown-item">
          <span>🛡️ Conflitos Militares</span>
          <span>{scores.military}</span>
        </div>
        <div className="breakdown-item">
          <span>💰 Tesouro</span>
          <span>{scores.treasury}</span>
        </div>
        <div className="breakdown-item">
          <span>🏛️ Maravilhas</span>
          <span>{scores.wonders}</span>
        </div>
        <div className="breakdown-item">
          <span>🏘️ Construções Civis (Cartas Azuis)</span>
          <span>{scores.civilian}</span>
        </div>
        <div className="breakdown-item">
          <span>🔬 Ciência</span>
          <span>{scores.science}</span>
        </div>
        <div className="breakdown-item">
          <span>🏪 Comércio</span>
          <span>{scores.commercial}</span>
        </div>
        <div className="breakdown-item">
          <span>⚖️ Guildas</span>
          <span>{scores.guilds}</span>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', fontSize: '1.1rem', color: '#666' }}>
        Tiebreaker: {coins} moedas
      </div>
    </div>
  );
}

export default FinalScore;
