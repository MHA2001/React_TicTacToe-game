import { useState } from 'react';

const initialBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
	const [board, setBoard] = useState(initialBoard);
	function handleSelectTile(rowIndex, colIndex) {
		setBoard((prevBoard) => {
			const updateBoard = [...prevBoard.map((innerArray) => [...innerArray])];
			updateBoard[rowIndex][colIndex] = activePlayerSymbol;
			return updateBoard;
		});
		onSelectSquare();
	}
	return (
		<ol id='game-board'>
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((tile, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => handleSelectTile(rowIndex, colIndex)}>
									{tile}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
