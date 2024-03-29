import { Container, TimerText } from './styles';
import { useEffect, useContext } from 'react';
import { TimerContext } from '../../context/TimerContext';

export default function Clock() {
	const { time, setTime, isActive, setIsActive }: any = useContext(TimerContext);

	useEffect(() => {
		if(isActive && time > 0) {
			const intervalId = setInterval(() => {
				setTime((prevTime: number) => prevTime - 1);
			}, 1000);

			return () => clearInterval(intervalId);
		}
	}, [time, isActive]);

	function getTime(time: number) {
		const minutsInteger = Math.floor(time/60);
		const secondsInteger = time % 60;

		const min = minutsInteger < 10 ? '0' + minutsInteger : minutsInteger;
		const sec = secondsInteger < 10 ? '0' + secondsInteger : secondsInteger;

		return `${min}:${sec}`;
	}

	function toggleClock() {
		setIsActive((prevState: boolean) => !prevState);
	}

	return (
		<Container>
			<TimerText>{getTime(time)}</TimerText>
			<button onClick={toggleClock}>
				{isActive && 'Pause'}
				{!isActive && 'Start'}
			</button>
		</Container>
	);
}