import React from 'react';
import MilitaryScore from './MilitaryScore';
import TreasuryScore from './TreasuryScore';
import WondersScore from './WondersScore';
import CivilianScore from './CivilianScore';
import ScienceScore from './ScienceScore';
import CommercialScore from './CommercialScore';
import GuildsScore from './GuildsScore';

function PlayerScoreCard({ player, onScoreChange, onCoinsChange }) {
  const handleScoreChange = (category, score) => {
    onScoreChange(player.id, category, score);
  };

  const handleCoinsChange = (coins) => {
    onCoinsChange(player.id, coins);
  };

  return (
    <div className="player-card">
      <div className="player-header">
        <h2>{player.name}</h2>
        <div className="player-total-score">
          {player.totalScore} pontos
        </div>
      </div>
      
      <div className="player-scores-grid">
        <MilitaryScore onScoreChange={(score) => handleScoreChange('military', score)} />
        <TreasuryScore 
          onScoreChange={(score) => handleScoreChange('treasury', score)} 
          onCoinsChange={handleCoinsChange}
        />
        <WondersScore onScoreChange={(score) => handleScoreChange('wonders', score)} />
        <CivilianScore onScoreChange={(score) => handleScoreChange('civilian', score)} />
        <ScienceScore onScoreChange={(score) => handleScoreChange('science', score)} />
        <CommercialScore onScoreChange={(score) => handleScoreChange('commercial', score)} />
        <GuildsScore onScoreChange={(score) => handleScoreChange('guilds', score)} />
      </div>
      
      <div className="player-summary">
        <div className="score-breakdown-mini">
          <div className="breakdown-mini-item">
            <span>🛡️</span>
            <span>{player.scores.military}</span>
          </div>
          <div className="breakdown-mini-item">
            <span>💰</span>
            <span>{player.scores.treasury}</span>
          </div>
          <div className="breakdown-mini-item">
            <span>🏛️</span>
            <span>{player.scores.wonders}</span>
          </div>
          <div className="breakdown-mini-item">
            <span>🏘️</span>
            <span>{player.scores.civilian}</span>
          </div>
          <div className="breakdown-mini-item">
            <span>🔬</span>
            <span>{player.scores.science}</span>
          </div>
          <div className="breakdown-mini-item">
            <span>🏪</span>
            <span>{player.scores.commercial}</span>
          </div>
          <div className="breakdown-mini-item">
            <span>⚖️</span>
            <span>{player.scores.guilds}</span>
          </div>
        </div>
        <div className="coins-display">
          💰 {player.coins} moedas
        </div>
      </div>
    </div>
  );
}

export default PlayerScoreCard;
