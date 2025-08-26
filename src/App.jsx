import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';

function driveActivePlayer(gameTurns) {
	let currentPlayer = 'X';
	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O';
	}
	return currentPlayer;
}

export default function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = driveActivePlayer(gameTurns);

	function handleSelectSquare(rowIndex, colIndex) {
		setGameTurns((prevTurns) => {
			const currentPlayer = driveActivePlayer(prevTurns);
			const updateTurns = [
				{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
				...prevTurns,
			];
			return updateTurns;
		});
	}

	return (
		<>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player
						initialName='player 1'
						symbol='X'
						isActive={activePlayer === 'X'}
					/>
					<Player
						initialName='player 2'
						symbol='O'
						isActive={activePlayer === 'O'}
					/>
				</ol>
				<GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
			</div>
			<Log turns={gameTurns} />
		</>
	);
}
