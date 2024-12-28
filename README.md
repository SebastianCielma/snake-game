# Snake Game

    A classic Snake game implemented using React, Zustand for state management, and react-use-gesture for handling swipe gestures. This project provides a customizable and engaging version of the traditional Snake game with a modern look and feel.

    ## Features

    -   Classic Snake gameplay: Control the snake to eat food and grow longer.
    -   Customizable board and snake colors: Choose your preferred colors using the color pickers.
    -   Score tracking: Keep track of your score as you play.
    -   Game Over screen with a restart button.
    -   Responsive design: The game adapts to different screen sizes.
    -   Touch and mouse support: Use arrow keys, swipe gestures, or mouse to control the snake.
    -   Clean and well-structured code: Adheres to clean code principles and SOLID design guidelines.

    ## Technologies Used

    -   **React:** A JavaScript library for building user interfaces.
    -   **Zustand:** A small, fast, and scalable state-management solution.
    -   **react-use-gesture:** A library for handling gestures in React.
    -   **Vite:** A fast build tool for modern web development.

    ## Getting Started

    To run this project locally, follow these steps:

    1.  Clone the repository:

        ```bash
        git clone [repository-url]
        cd snake-game
        ```

    2.  Install dependencies:

        ```bash
        npm install
        ```

    3.  Start the development server:

        ```bash
        npm run dev
        ```

    4.  Open your browser and navigate to the provided local server URL.

    ## Project Structure

    ```
    snake-game/
    ├── index.html          # Main HTML file
    ├── package.json        # Project dependencies and scripts
    ├── README.md           # Project documentation
    ├── src/
    │   ├── App.jsx         # Main application component
    │   ├── components/     # React components
    │   │   ├── ColorPickers.jsx # Color picker component
    │   │   ├── GameBoard.jsx    # Game board component
    │   │   ├── GameOverlay.jsx  # Game over overlay component
    │   │   └── ScoreDisplay.jsx # Score display component
    │   ├── hooks/          # Custom React hooks
    │   │   └── useInterval.js # Custom hook for interval management
    │   ├── index.css       # Global styles
    │   ├── main.jsx        # Entry point for the React application
    │   └── store.js        # Zustand store for state management
    ```

    ## Contributing

    Contributions are welcome! If you have any ideas or improvements, feel free to submit a pull request.
