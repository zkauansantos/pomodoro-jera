import Tags from '../../components/Tags';
import { useState } from 'react';

import Timer from '../../components/Timer';
import Settings from '../../components/Settings';
import PomodorosOfDay from '../../components/PomodorosOfDay';
import ModalSettings from '../../components/ModalSettings';

import { Container } from './styles';

export default function Home() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	return (
		<Container>
			<h1>Pomodoro</h1>

			<Tags/>
			<Timer/>
			<Settings onOpenModal={() => setIsModalVisible(true)}/>
			<PomodorosOfDay/>

			{isModalVisible && (
				<ModalSettings
					onCloseModal={() => setIsModalVisible(false)}
				/>
			)}
		</Container>
	);
}

