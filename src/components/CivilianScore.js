import React, { useState, useEffect } from 'react';

function CivilianScore({ onScoreChange }) {
  const [civilianPoints, setCivilianPoints] = useState(0);

  useEffect(() => {
    onScoreChange(civilianPoints);
  }, [civilianPoints, onScoreChange]);

  return (
    <div className="score-card">
      <h3>🏘️ Construções Civis (Cartas Azuis)</h3>
      
      <div className="input-group">
        <label>Total de Pontos das Cartas Azuis:</label>
        <input
          type="number"
          min="0"
          value={civilianPoints}
          onChange={(e) => setCivilianPoints(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="score-display">
        <div className="score">{civilianPoints} pontos</div>
        <small>Soma de todas as cartas azuis</small>
      </div>
    </div>
  );
}

export default CivilianScore;
