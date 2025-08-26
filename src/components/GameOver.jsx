export default function GameOver({ winner }) {
	return (
		<div id='game-over'>
			<h2>{winner} won!</h2>
			<p>Game Over!</p>
			<p>
				<button>Rematch!</button>
			</p>
		</div>
	);
}
