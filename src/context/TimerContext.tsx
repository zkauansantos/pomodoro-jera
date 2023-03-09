import { createContext, useState, useEffect } from 'react';
import finishTime from '../assets/audio/finish.mp3';

interface TimerProviderProps {
  children: React.ReactNode
}

export const TimerContext = createContext({});

export default function TimerProvider({children}: TimerProviderProps) {
	const [pomodoroTime, setPomodoroTime] = useState(1500);
	const [shortBreak, setShortBreak] = useState(300);
	const [longBreak, setLongBreak] = useState(600);
	const [initTime, setInitTime,] = useState(0);
	const [selectedTag, setSelectedTag] = useState(0);
	const [progress, setProgress] = useState(100);
	const [time, setTime] = useState(0.1);
	const [isActive, setIsActive] = useState(false);

	function toggleTime() {
		if (selectedTag === 0) {
			setTime(pomodoroTime);
			setInitTime(pomodoroTime);
		}
		if (selectedTag === 1) {
			setTime(shortBreak);
			setInitTime(shortBreak);
		}
		if (selectedTag === 2) {
			setTime(longBreak);
			setInitTime(longBreak);
		}
	}

	async function playAudio() {
		const audio = new Audio(finishTime);
		audio.play();
		await	new Promise((resolve) => setTimeout(() => resolve(null), 3000));
		toggleTime();
		setIsActive(false);
	}

	useEffect(() => {
		toggleTime();
	}, [selectedTag, pomodoroTime, shortBreak, longBreak]);

	useEffect(() => {
		if(time === 0){
			playAudio();
		}
	},[time]);

	return (
		<TimerContext.Provider
			value={{
				selectedTag,
				setSelectedTag,
				progress,
				setProgress,
				time,
				setTime,
				isActive,
				setIsActive,
				initTime,
				setInitTime,
				setPomodoroTime,
				setShortBreak,
				setLongBreak
			}}>
			{children}
		</TimerContext.Provider>
	);
}