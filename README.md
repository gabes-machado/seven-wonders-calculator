# Seven Wonders Calculator

A React-based calculator for scoring the Seven Wonders board game. This application helps players calculate their final victory points across all seven scoring categories.

## Features

- **Military Conflicts**: Track victories and defeats across all three ages with proper scoring
- **Treasury Coins**: Calculate points from coins (1 point per 3 coins)
- **Wonders**: Input total points from completed wonder stages
- **Civilian Structures**: Sum points from blue cards
- **Scientific Structures**: Complex science scoring with identical symbols (n²) and complete sets (7 points each)
- **Commercial Structures**: Points from Age III yellow cards
- **Guilds**: Points from purple guild cards
- **Final Score**: Automatic calculation with breakdown and tiebreaker information

## Scoring Rules

The calculator implements the official Seven Wonders scoring rules:

1. **Military**: Age I victories (+1), Age II victories (+3), Age III victories (+5), all defeats (-1)
2. **Treasury**: 1 point per 3 coins (rounded down)
3. **Wonders**: Sum of victory points on completed stages
4. **Civilian**: Sum of points on blue cards
5. **Science**: Identical symbols squared + 7 points per complete set of 3 different symbols
6. **Commercial**: Points from Age III yellow cards only
7. **Guilds**: Variable points based on guild card rules

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the calculator in your browser.

## Usage

1. Enter your scores for each category using the input fields
2. The calculator automatically updates your total score in real-time
3. View the final score breakdown at the bottom
4. Tiebreaker information (total coins) is displayed for reference

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- React 18
- CSS3 with modern styling
- Responsive grid layout
- Real-time score calculation
