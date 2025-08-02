import React, { useState, useEffect } from 'react';

function GuildsScore({ onScoreChange }) {
  const [guildPoints, setGuildPoints] = useState(0);

  useEffect(() => {
    onScoreChange(guildPoints);
  }, [guildPoints, onScoreChange]);

  return (
    <div className="score-card">
      <h3>⚖️ Guildas (Cartas Roxas)</h3>
      
      <div className="input-group">
        <label>Total de Pontos das Guildas:</label>
        <input
          type="number"
          min="0"
          value={guildPoints}
          onChange={(e) => setGuildPoints(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="score-display">
        <div className="score">{guildPoints} pontos</div>
        <small>Calcule com base nas regras específicas das cartas guildas</small>
      </div>
    </div>
  );
}

export default GuildsScore;
