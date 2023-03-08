import Tags from '../../components/Tags';
import Timer from '../../components/Timer';
import Settings from '../../components/Settings';
import { Container } from './styles';
import { useState } from 'react';
import ModalSettings from '../../components/ModalSettings';

export default function Home() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	return (
		<Container>
			<h1>Pomodoro</h1>

			<Tags/>
			<Timer/>
			<Settings onOpenModal={() => setIsModalVisible(true)}/>
			{isModalVisible && (
				<ModalSettings
					onCloseModal={() => setIsModalVisible(false)}
				/>
			)}
		</Container>
	);
}

