import React, { useState, useEffect } from 'react';

function WondersScore({ onScoreChange }) {
  const [wonderPoints, setWonderPoints] = useState(0);

  useEffect(() => {
    onScoreChange(wonderPoints);
  }, [wonderPoints, onScoreChange]);

  return (
    <div className="score-card">
      <h3>🏛️ Maravilhas</h3>
      
      <div className="input-group">
        <label>Total de Pontos das Maravilhas:</label>
        <input
          type="number"
          min="0"
          value={wonderPoints}
          onChange={(e) => setWonderPoints(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="score-display">
        <div className="score">{wonderPoints} pontos</div>
        <small>Soma de todas as maravilhas completadas</small>
      </div>
    </div>
  );
}

export default WondersScore;
