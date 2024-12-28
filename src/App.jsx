import React from 'react';
    import GameBoard from './components/GameBoard';
    import GameOverlay from './components/GameOverlay';
    import ScoreDisplay from './components/ScoreDisplay';
    import ColorPickers from './components/ColorPickers';

    const App = () => {
      return (
        <div>
          <ColorPickers />
          <ScoreDisplay />
          <GameBoard />
          <GameOverlay />
        </div>
      );
    };

    export default App;
