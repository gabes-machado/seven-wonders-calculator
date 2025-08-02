import React, { useState, useEffect } from 'react';

function TreasuryScore({ onScoreChange, onCoinsChange }) {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const score = Math.floor(coins / 3);
    onScoreChange(score);
    onCoinsChange(coins);
  }, [coins, onScoreChange, onCoinsChange]);

  const currentScore = Math.floor(coins / 3);

  return (
    <div className="score-card">
      <h3>💰 Moedas do Tesouro</h3>
      
      <div className="input-group">
        <label>Total de Moedas:</label>
        <input
          type="number"
          min="0"
          value={coins}
          onChange={(e) => setCoins(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="score-display">
        <div className="score">{currentScore} pontos</div>
        <small>({coins} moedas ÷ 3 = {currentScore} pontos)</small>
      </div>
    </div>
  );
}

export default TreasuryScore;
