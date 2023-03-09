import { useEffect, useContext, useState } from 'react';
import {toast} from 'react-toastify';

import { TimerContext } from '../../context/TimerContext';

import { Container } from './styles';

export default function PomodorosOfDay() {
	const { initTime, time, selectedTag} : any = useContext(TimerContext);
	const [pomodorosOfDay, setPomodrosOfDay] = useState(0);

	useEffect(() => {
		if(selectedTag === 0) {
			if(initTime === 1) {
				if(time === 0) {
					setPomodrosOfDay((prevState) => prevState + 1);
					return;
				}
			}
		}
	}, [time]);

	useEffect(() => {
		const completedFourPomodoros = pomodorosOfDay === 0 ? false : pomodorosOfDay % 4 === 0;

		if(completedFourPomodoros) {
			toast.warning(`Você completou ${pomodorosOfDay} pomodoros faça uma pausa de 10 minutos`);
			return;
		}
	}, [pomodorosOfDay]);

	return (
		<Container>
			<p>Pomodoros do dia: <span>{pomodorosOfDay}</span></p>
		</Container>
	);
}