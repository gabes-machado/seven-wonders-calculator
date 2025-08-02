import React, { useState, useEffect } from 'react';

function ScienceScore({ onScoreChange }) {
  const [cogs, setCogs] = useState(0);
  const [compasses, setCompasses] = useState(0);
  const [tablets, setTablets] = useState(0);

  useEffect(() => {
    // Calculate points for identical symbols (n^2)
    const cogPoints = cogs * cogs;
    const compassPoints = compasses * compasses;
    const tabletPoints = tablets * tablets;
    
    // Calculate points for complete sets (7 points per set)
    const completeSets = Math.min(cogs, compasses, tablets);
    const setPoints = completeSets * 7;
    
    const totalScore = cogPoints + compassPoints + tabletPoints + setPoints;
    onScoreChange(totalScore);
  }, [cogs, compasses, tablets, onScoreChange]);

  const cogPoints = cogs * cogs;
  const compassPoints = compasses * compasses;
  const tabletPoints = tablets * tablets;
  const completeSets = Math.min(cogs, compasses, tablets);
  const setPoints = completeSets * 7;
  const totalScore = cogPoints + compassPoints + tabletPoints + setPoints;

  return (
    <div className="score-card">
      <h3>🔬 Ciência (Cartas Verdes)</h3>
      
      <div className="input-group">
        <label>⚙️ Engrenagens:</label>
        <input
          type="number"
          min="0"
          value={cogs}
          onChange={(e) => setCogs(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="input-group">
        <label>🧭 Compassos:</label>
        <input
          type="number"
          min="0"
          value={compasses}
          onChange={(e) => setCompasses(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="input-group">
        <label>📜 Tabletes:</label>
        <input
          type="number"
          min="0"
          value={tablets}
          onChange={(e) => setTablets(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="score-display">
        <div className="score">{totalScore} pontos</div>
        <small>
          Engrenagens: {cogs}² = {cogPoints}<br/>
          Compassos: {compasses}² = {compassPoints}<br/>
          Tabletes: {tablets}² = {tabletPoints}<br/>
          Conjuntos Completos: {completeSets} × 7 = {setPoints}
        </small>
      </div>
    </div>
  );
}

export default ScienceScore;
