import { useState } from 'react';

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [name, setName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		setIsEditing((editing) => !editing);
		if (isEditing) onChangeName(symbol, name);
	}

	function handleChange(event) {
		setName(event.target.value);
	}

	let NameEl = <span className='player-name'>{name}</span>;
	if (isEditing)
		NameEl = (
			<input
				type='text'
				className='player-name'
				value={name}
				onChange={handleChange}
				autoFocus
				required
			/>
		);
	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
				{NameEl}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>
				{isEditing ? 'Save' : 'Editing'}
			</button>
		</li>
	);
}
