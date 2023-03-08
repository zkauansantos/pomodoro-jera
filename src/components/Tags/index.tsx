import { useState } from 'react';
import {Container, Tag} from './styles';

export default function Tags () {
	const [active, setActive] = useState(0);
	const tags = ['Pomodoro', 'Short Break', 'Long Break'];

	function handleActiveTag(index: number) {
		setActive(index);
	}

	return (
		<Container>
			{tags.map((tag, i) => (
				<Tag
					onClick={() => handleActiveTag(i)}
					active={active === i}
					key={i}>
					{tag}
				</Tag>
			) )}
		</Container>
	);
}