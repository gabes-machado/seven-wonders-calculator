import React from 'react';

function Podium({ players }) {
  const getPodiumPosition = (index) => {
    switch (index) {
      case 0: return { emoji: '🥇', position: '1º Lugar', class: 'first-place' };
      case 1: return { emoji: '🥈', position: '2º Lugar', class: 'second-place' };
      case 2: return { emoji: '🥉', position: '3º Lugar', class: 'third-place' };
      default: return { emoji: '🏅', position: `${index + 1}º Lugar`, class: 'other-place' };
    }
  };

  if (players.length === 0) {
    return null;
  }

  return (
    <div className="podium-section">
      <h2>🏆 Classificação Final</h2>
      
      <div className="podium">
        {players.map((player, index) => {
          const podiumInfo = getPodiumPosition(index);
          return (
            <div key={player.id} className={`podium-player ${podiumInfo.class}`}>
              <div className="podium-rank">
                <span className="rank-emoji">{podiumInfo.emoji}</span>
                <span className="rank-position">{podiumInfo.position}</span>
              </div>
              
              <div className="podium-player-info">
                <h3>{player.name}</h3>
                <div className="podium-score">{player.totalScore} pontos</div>
                <div className="podium-coins">💰 {player.coins} moedas</div>
              </div>
              
              <div className="podium-breakdown">
                <div className="podium-breakdown-grid">
                  <div className="podium-breakdown-item">
                    <span>🛡️</span>
                    <span>{player.scores.military}</span>
                  </div>
                  <div className="podium-breakdown-item">
                    <span>💰</span>
                    <span>{player.scores.treasury}</span>
                  </div>
                  <div className="podium-breakdown-item">
                    <span>🏛️</span>
                    <span>{player.scores.wonders}</span>
                  </div>
                  <div className="podium-breakdown-item">
                    <span>🏘️</span>
                    <span>{player.scores.civilian}</span>
                  </div>
                  <div className="podium-breakdown-item">
                    <span>🔬</span>
                    <span>{player.scores.science}</span>
                  </div>
                  <div className="podium-breakdown-item">
                    <span>🏪</span>
                    <span>{player.scores.commercial}</span>
                  </div>
                  <div className="podium-breakdown-item">
                    <span>⚖️</span>
                    <span>{player.scores.guilds}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {players.length > 1 && players[0].totalScore === players[1].totalScore && (
        <div className="tie-info">
          ⚖️ Em caso de empate, o jogador com mais moedas vence
        </div>
      )}
    </div>
  );
}

export default Podium;
