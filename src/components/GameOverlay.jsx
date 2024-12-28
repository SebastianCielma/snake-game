import React from 'react';
    import useGameStore from '../store';

    const GameOverlay = () => {
      const gameOver = useGameStore((state) => state.gameOver);
      const resetGame = useGameStore((state) => state.resetGame);

      return (
        <div className={`game-overlay ${gameOver ? 'active' : ''}`}>
          {gameOver && (
            <>
              <h1>Game Over</h1>
              <button className="restart-button" onClick={resetGame}>
                Restart
              </button>
            </>
          )}
        </div>
      );
    };

    export default GameOverlay;
