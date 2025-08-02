import React, { useState, useEffect } from 'react';

function MilitaryScore({ onScoreChange }) {
  const [age1Victories, setAge1Victories] = useState(0);
  const [age1Defeats, setAge1Defeats] = useState(0);
  const [age2Victories, setAge2Victories] = useState(0);
  const [age2Defeats, setAge2Defeats] = useState(0);
  const [age3Victories, setAge3Victories] = useState(0);
  const [age3Defeats, setAge3Defeats] = useState(0);

  useEffect(() => {
    const totalScore = 
      (age1Victories * 1) - (age1Defeats * 1) +
      (age2Victories * 3) - (age2Defeats * 1) +
      (age3Victories * 5) - (age3Defeats * 1);
    
    onScoreChange(totalScore);
  }, [age1Victories, age1Defeats, age2Victories, age2Defeats, age3Victories, age3Defeats, onScoreChange]);

  const currentScore = 
    (age1Victories * 1) - (age1Defeats * 1) +
    (age2Victories * 3) - (age2Defeats * 1) +
    (age3Victories * 5) - (age3Defeats * 1);

  return (
    <div className="score-card">
      <h3>🛡️ Conflitos Militares</h3>
      
      <div className="input-group">
        <label>Vitórias na Idade I (+1 cada):</label>
        <input
          type="number"
          min="0"
          max="2"
          value={age1Victories}
          onChange={(e) => setAge1Victories(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="input-group">
        <label>Derrotas na Idade I (-1 cada):</label>
        <input
          type="number"
          min="0"
          max="2"
          value={age1Defeats}
          onChange={(e) => setAge1Defeats(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="input-group">
        <label>Vitórias na Idade II (+3 cada):</label>
        <input
          type="number"
          min="0"
          max="2"
          value={age2Victories}
          onChange={(e) => setAge2Victories(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="input-group">
        <label>Derrotas na Idade II (-1 cada):</label>
        <input
          type="number"
          min="0"
          max="2"
          value={age2Defeats}
          onChange={(e) => setAge2Defeats(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="input-group">
        <label>Vítórias na Idade III (+5 cada):</label>
        <input
          type="number"
          min="0"
          max="2"
          value={age3Victories}
          onChange={(e) => setAge3Victories(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="input-group">
        <label>Derrotas na Idade III (-1 cada):</label>
        <input
          type="number"
          min="0"
          max="2"
          value={age3Defeats}
          onChange={(e) => setAge3Defeats(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="score-display">
        <div className="score">{currentScore} pontos</div>
      </div>
    </div>
  );
}

export default MilitaryScore;
