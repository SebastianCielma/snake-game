import React, { useEffect, useRef } from 'react';
    import useGameStore from '../store';
    import { useInterval } from '../hooks/useInterval';
    import { useGesture } from 'react-use-gesture';

    const GameBoard = () => {
      const gridSize = useGameStore((state) => state.gridSize);
      const snake = useGameStore((state) => state.snake);
      const food = useGameStore((state) => state.food);
      const direction = useGameStore((state) => state.direction);
      const gameOver = useGameStore((state) => state.gameOver);
      const gameSpeed = useGameStore((state) => state.gameSpeed);
      const setSnake = useGameStore((state) => state.setSnake);
      const setFood = useGameStore((state) => state.setFood);
      const setDirection = useGameStore((state) => state.setDirection);
      const setScore = useGameStore((state) => state.setScore);
      const setGameOver = useGameStore((state) => state.setGameOver);
      const resetGame = useGameStore((state) => state.resetGame);
      const boardColor = useGameStore((state) => state.boardColor);
      const snakeColor = useGameStore((state) => state.snakeColor);

      const gameBoardRef = useRef(null);

      const getRandomGridPosition = () => {
        return {
          x: Math.floor(Math.random() * gridSize),
          y: Math.floor(Math.random() * gridSize),
        };
      };

      const checkCollision = (head) => {
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
          return true;
        }
        for (let i = 1; i < snake.length; i++) {
          if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
          }
        }
        return false;
      };

      const handleGameOver = () => {
        setGameOver(true);
      };

      const moveSnake = () => {
        if (gameOver) return;

        const head = { ...snake[0] };
        switch (direction) {
          case 'UP':
            head.y -= 1;
            break;
          case 'DOWN':
            head.y += 1;
            break;
          case 'LEFT':
            head.x -= 1;
            break;
          case 'RIGHT':
            head.x += 1;
            break;
          default:
            break;
        }

        if (checkCollision(head)) {
          handleGameOver();
          return;
        }

        let newSnake = [head, ...snake];
        if (head.x === food.x && head.y === food.y) {
          setFood(getRandomGridPosition());
          setScore((score) => score + 1);
        } else {
          newSnake.pop();
        }
        setSnake(newSnake);
      };

      useInterval(moveSnake, gameOver ? null : gameSpeed);

      const handleKeyDown = (e) => {
        if (gameOver) return;
        switch (e.key) {
          case 'ArrowUp':
            if (direction !== 'DOWN') setDirection('UP');
            break;
          case 'ArrowDown':
            if (direction !== 'UP') setDirection('DOWN');
            break;
          case 'ArrowLeft':
            if (direction !== 'RIGHT') setDirection('LEFT');
            break;
          case 'ArrowRight':
            if (direction !== 'LEFT') setDirection('RIGHT');
            break;
          default:
            break;
        }
      };

      useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [direction, gameOver]);

      const bind = useGesture({
        onSwipe: ({ dir }) => {
          if (gameOver) return;
          switch (dir) {
            case 'up':
              if (direction !== 'DOWN') setDirection('UP');
              break;
            case 'down':
              if (direction !== 'UP') setDirection('DOWN');
              break;
            case 'left':
              if (direction !== 'RIGHT') setDirection('LEFT');
              break;
            case 'right':
              if (direction !== 'LEFT') setDirection('RIGHT');
              break;
            default:
              break;
          }
        },
      });

      useEffect(() => {
        if (gameBoardRef.current) {
          bind(gameBoardRef.current);
        }
      }, [bind, gameBoardRef]);

      const renderGrid = () => {
        const grid = [];
        for (let y = 0; y < gridSize; y++) {
          for (let x = 0; x < gridSize; x++) {
            let cellClass = '';
            const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;

            let style = { width: '100%', height: '100%' };

            if (isSnake) {
              cellClass = 'snake-segment';
            } else if (isFood) {
              cellClass = 'food';
            }

            grid.push(
              <div
                key={`${x}-${y}`}
                className={cellClass}
                style={style}
              />,
            );
          }
        }
        return grid;
      };

      return (
        <div className="game-board" ref={gameBoardRef} style={{ '--board-color': boardColor, '--snake-color': snakeColor }}>
          {renderGrid()}
        </div>
      );
    };

    export default GameBoard;
