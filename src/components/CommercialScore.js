import React, { useState, useEffect } from 'react';

function CommercialScore({ onScoreChange }) {
  const [commercialPoints, setCommercialPoints] = useState(0);

  useEffect(() => {
    onScoreChange(commercialPoints);
  }, [commercialPoints, onScoreChange]);

  return (
    <div className="score-card">
      <h3>🏪 Comércio (Cartas Amarelas)</h3>
      
      <div className="input-group">
        <label>Total de Pontos das Cartas Amarelas:</label>
        <input
          type="number"
          min="0"
          value={commercialPoints}
          onChange={(e) => setCommercialPoints(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="score-display">
        <div className="score">{commercialPoints} pontos</div>
        <small>Pontos das cartas amarelas</small>
      </div>
    </div>
  );
}

export default CommercialScore;
