import Tags from '../../components/Tags';
import Timer from '../../components/Timer';
import { Container } from './styles';

export default function Home() {
	return (
		<Container>
			<h1>Pomodoro</h1>

			<Tags/>
			<Timer/>
		</Container>
	);
}

