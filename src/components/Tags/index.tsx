import { useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';
import {Container, Tag} from './styles';

export default function Tags () {
	const tags = ['Pomodoro', 'Pequena Pausa', 'Longa Pausa'];
	const { selectedTag, setSelectedTag, setIsActive }: any = useContext(TimerContext);

	function handleActiveTag(index: number) {
		setSelectedTag(index);
		setIsActive(false);
	}

	return (
		<Container>
			{tags.map((tag, i) => (
				<Tag
					onClick={() => handleActiveTag(i)}
					active={selectedTag === i}
					key={i}>
					{tag}
				</Tag>
			) )}
		</Container>
	);
}