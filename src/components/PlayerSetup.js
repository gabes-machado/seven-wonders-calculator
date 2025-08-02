import React, { useState } from 'react';

function PlayerSetup({ onStartGame, numPlayers, setNumPlayers }) {
  const [playerNames, setPlayerNames] = useState([]);

  const handleNumPlayersChange = (count) => {
    setNumPlayers(count);
    const names = Array(count).fill('').map((_, index) => 
      playerNames[index] || ''
    );
    setPlayerNames(names);
  };

  const handleNameChange = (index, name) => {
    const updatedNames = [...playerNames];
    updatedNames[index] = name;
    setPlayerNames(updatedNames);
  };

  const handleStartGame = () => {
    if (numPlayers >= 2) {
      onStartGame(numPlayers, playerNames);
    }
  };

  return (
    <div className="player-setup">
      <div className="setup-card">
        <h2>Configuração da Partida</h2>
        
        <div className="input-group">
          <label>Número de Jogadores (2-7):</label>
          <select 
            value={numPlayers} 
            onChange={(e) => handleNumPlayersChange(parseInt(e.target.value))}
          >
            <option value={0}>Selecione...</option>
            {[2, 3, 4, 5, 6, 7].map(num => (
              <option key={num} value={num}>{num} jogadores</option>
            ))}
          </select>
        </div>

        {numPlayers > 0 && (
          <div className="players-names">
            <h3>Nomes dos Jogadores:</h3>
            {Array(numPlayers).fill(0).map((_, index) => (
              <div key={index} className="input-group">
                <label>Jogador {index + 1}:</label>
                <input
                  type="text"
                  placeholder={`Jogador ${index + 1}`}
                  value={playerNames[index] || ''}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
        )}

        {numPlayers >= 2 && (
          <button className="start-game-button" onClick={handleStartGame}>
            🎮 Iniciar Partida
          </button>
        )}
      </div>
    </div>
  );
}

export default PlayerSetup;
