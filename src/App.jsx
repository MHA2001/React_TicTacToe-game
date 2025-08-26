import Player from './components/Player';

export default function App() {
	return (
		<div id='game-container'>
			<ol id='players'>
				<Player initialName='player 1' symbol='X' />
				<Player initialName='player 2' symbol='O' />
			</ol>
		</div>
	);
}
