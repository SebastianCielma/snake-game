import React from 'react';
    import useGameStore from '../store';

    const ScoreDisplay = () => {
      const score = useGameStore((state) => state.score);

      return <div className="score-display">Score: {score}</div>;
    };

    export default ScoreDisplay;
