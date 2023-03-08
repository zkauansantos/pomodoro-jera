import { createContext, useState, useEffect } from 'react';
import clear from '../assets/audio/finish.mp3';

interface TimerProviderProps {
  children: React.ReactNode
}

export const TimerContext = createContext({});

export default function TimerProvider({children}: TimerProviderProps) {
	const [initTime, setInitTime,] = useState(0);
	const [selectedTag, setSelectedTag] = useState(0);
	const [progress, setProgress] = useState(100);
	const [time, setTime] = useState(0.1);
	const [isActive, setIsActive] = useState(false);

	function toggleTime() {
		if (selectedTag === 0) {
			setTime(1500);
			setInitTime(1500);
		}
		if (selectedTag === 1) {
			setTime(300);
			setInitTime(300);
		}
		if (selectedTag === 2) {
			setTime(5);
			setInitTime(5);
		}
	}

	async function playAudio() {
		const audio = new Audio(clear);
		audio.play();
		await	new Promise((resolve) => setTimeout(() => resolve(null), 7000));
		toggleTime();
		setIsActive(false);
	}

	useEffect(() => {
		toggleTime();
	}, [selectedTag]);

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
			}}>
			{children}
		</TimerContext.Provider>
	);
}