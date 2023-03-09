import { useEffect } from 'react';

type clearPomodorosfunc = (clear : number) => void

export default function useEndOfDay(clearPomodoros: clearPomodorosfunc) {
	function isEndOfDay() {
		const today = new Date();
		const endOfDay = new Date();
		endOfDay.setHours(23, 59, 59);

		return today.getTime() >= endOfDay.getTime();
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if(isEndOfDay()){
				clearPomodoros(0);
			}
		}, 10000);

		return () => clearInterval(interval);
	} , []);

	return;
}