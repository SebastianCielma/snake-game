import { create } from 'zustand';

    const useGameStore = create((set) => ({
      gridSize: 20,
      snake: [{ x: 10, y: 10 }],
      food: { x: 5, y: 5 },
      direction: 'RIGHT',
      score: 0,
      gameOver: false,
      gameSpeed: 200,
      boardColor: '#ddd',
      snakeColor: 'green',
      setSnake: (snake) => set({ snake }),
      setFood: (food) => set({ food }),
      setDirection: (direction) => set({ direction }),
      setScore: (score) => set({ score }),
      setGameOver: (gameOver) => set({ gameOver }),
      setBoardColor: (boardColor) => set({ boardColor }),
      setSnakeColor: (snakeColor) => set({ snakeColor }),
      resetGame: () =>
        set({
          snake: [{ x: 10, y: 10 }],
          food: { x: 5, y: 5 },
          direction: 'RIGHT',
          score: 0,
          gameOver: false,
        }),
    }));

    export default useGameStore;
