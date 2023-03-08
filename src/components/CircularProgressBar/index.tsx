import { useContext, useEffect } from 'react';
import { TimerContext } from '../../context/TimerContext';
import Clock from '../Clock';
import { ContainerCounter, ContainerProgress } from './styles';

export default function CircularProgressBar() {
	const { progress, setProgress, time, initTime}: any = useContext(TimerContext);

	useEffect(() => {
		setProgress(time / (initTime / 100));
	}, [setProgress, time]);


	return (
		<ContainerProgress
			progress={progress}
		>
			<ContainerCounter>
				<Clock/>
			</ContainerCounter>
		</ContainerProgress>
	);
}