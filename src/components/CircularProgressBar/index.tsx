import { useState } from 'react';
import { ContainerCounter, ContainerProgress } from './styles';

export default function CircularProgressBar() {
	const [progress, setProgress] = useState(100);

	return (
		<ContainerProgress
			progress={progress}
		>
			<ContainerCounter>
			</ContainerCounter>
		</ContainerProgress>
	);
}