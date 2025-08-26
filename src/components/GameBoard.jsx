const initialBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
	let board = initialBoard;
	for (const turn of turns) {
		const { square, player } = turn;
		const { row, col } = square;
		board[row][col] = player;
	}

	return (
		<ol id='game-board'>
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((tile, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
