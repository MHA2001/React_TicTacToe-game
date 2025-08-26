export default function GameOver({ winner }) {
	return (
		<div id='game-over'>
			{winner && <h2>{winner} won!</h2>}
			{!winner && <h2>It's a draw!</h2>}
			<p>Game Over!</p>
			<p>
				<button>Rematch!</button>
			</p>
		</div>
	);
}
