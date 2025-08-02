import React, { useState, useCallback, useEffect } from 'react';
import PlayerSetup from './components/PlayerSetup';
import PlayerScoreCard from './components/PlayerScoreCard';
import Podium from './components/Podium';

function App() {
  const [numPlayers, setNumPlayers] = useState(0);
  const [players, setPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const initializePlayers = useCallback((count, playerNames) => {
    const initialPlayers = playerNames.map((name, index) => ({
      id: index + 1,
      name: name || `Jogador ${index + 1}`,
      scores: {
        military: 0,
        treasury: 0,
        wonders: 0,
        civilian: 0,
        science: 0,
        commercial: 0,
        guilds: 0
      },
      coins: 0,
      totalScore: 0
    }));
    setPlayers(initialPlayers);
    setGameStarted(true);
  }, []);

  const updatePlayerScore = useCallback((playerId, category, score) => {
    setPlayers(prev => prev.map(player => {
      if (player.id === playerId) {
        const updatedScores = { ...player.scores, [category]: score };
        const totalScore = Object.values(updatedScores).reduce((sum, s) => sum + s, 0);
        return { ...player, scores: updatedScores, totalScore };
      }
      return player;
    }));
  }, []);

  const updatePlayerCoins = useCallback((playerId, coins) => {
    setPlayers(prev => prev.map(player => 
      player.id === playerId ? { ...player, coins } : player
    ));
  }, []);

  const resetGame = () => {
    setGameStarted(false);
    setPlayers([]);
    setNumPlayers(0);
  };

  // Sort players by total score (descending) and then by coins (descending) for tiebreaker
  const rankedPlayers = [...players].sort((a, b) => {
    if (b.totalScore !== a.totalScore) {
      return b.totalScore - a.totalScore;
    }
    return b.coins - a.coins;
  });

  if (!gameStarted) {
    return (
      <div className="container">
        <div className="header">
          <h1>Calculadora Seven Wonders</h1>
          <p>Calcule os pontos de vitória para múltiplos jogadores</p>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'} {darkMode ? 'Modo Claro' : 'Modo Escuro'}
          </button>
        </div>
        <PlayerSetup 
          onStartGame={initializePlayers}
          numPlayers={numPlayers}
          setNumPlayers={setNumPlayers}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Calculadora Seven Wonders</h1>
        <p>Calcule os pontos de vitória para múltiplos jogadores</p>
        <div className="header-buttons">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'} {darkMode ? 'Modo Claro' : 'Modo Escuro'}
          </button>
          <button className="reset-button" onClick={resetGame}>
            🔄 Nova Partida
          </button>
        </div>
      </div>
      
      <div className="players-grid">
        {players.map(player => (
          <PlayerScoreCard
            key={player.id}
            player={player}
            onScoreChange={updatePlayerScore}
            onCoinsChange={updatePlayerCoins}
          />
        ))}
      </div>

      <Podium players={rankedPlayers} />
    </div>
  );
}

export default App;
