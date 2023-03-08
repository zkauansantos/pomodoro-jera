import { useContext, useEffect } from 'react';
import { TimerContext } from '../../context/TimerContext';
import Clock from '../Clock';
import { Container, ContainerCounter, ContainerProgress } from './styles';

export default function ProgressBar() {
	const { progress, setProgress, time, initTime}: any = useContext(TimerContext);

	useEffect(() => {
		setProgress(time / (initTime / 100));
	}, [setProgress, time]);


	return (
		<Container>
			<ContainerProgress
				progress={progress}
			>
				<ContainerCounter>
					<Clock/>
				</ContainerCounter>
			</ContainerProgress>
		</Container>
	);
}