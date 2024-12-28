import React from 'react';
    import useGameStore from '../store';

    const ColorPickers = () => {
      const setBoardColor = useGameStore((state) => state.setBoardColor);
      const setSnakeColor = useGameStore((state) => state.setSnakeColor);

      return (
        <div className="color-picker">
          <label>
            Board Color:
            <input
              type="color"
              defaultValue="#ddd"
              onChange={(e) => setBoardColor(e.target.value)}
            />
          </label>
          <label>
            Snake Color:
            <input
              type="color"
              defaultValue="green"
              onChange={(e) => setSnakeColor(e.target.value)}
            />
          </label>
        </div>
      );
    };

    export default ColorPickers;
