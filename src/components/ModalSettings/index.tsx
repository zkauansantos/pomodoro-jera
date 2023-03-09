import { Overlay, ContainerModal, HeaderModal, ContainerFields } from './styles';
import { IoMdClose } from 'react-icons/io';
import { useContext, useEffect, useState } from 'react';
import { TimerContext } from '../../context/TimerContext';
import { toast } from 'react-toastify';

interface ModalSettingsProps {
  onCloseModal(): void
}

export default function ModalSettings({onCloseModal}: ModalSettingsProps) {
	const { setPomodoroTime, setShortBreak, setLongBreak }: any = useContext(TimerContext);
	const [hasError, setHasError] = useState(false);
	const [updatedPomodoro, setUpdatedPomodoro] = useState('');
	const [updatedShortBreak, setUpdatedShortBreak] = useState('');
	const [updatedLongBreak, setUpdatedLongBreak] = useState('');

	function handleUpdatedPomodoro(event: any) {
		setUpdatedPomodoro(event.target.value);
	}

	function handleUpdatedShortBreak(event: any) {
		setUpdatedShortBreak(event.target.value);
	}

	function handleLongBreak(event: any) {
		setUpdatedLongBreak(event.target.value);
	}


	function handleSubmit (event: any) {
		event.preventDefault();

		if(!updatedPomodoro && !updatedShortBreak && !updatedLongBreak){
			setHasError(true);
			return;
		}

		updatedPomodoro ? setPomodoroTime(Number(updatedPomodoro) * 60) : null;
		updatedShortBreak ? setShortBreak(Number(updatedShortBreak) * 60) : null;
		updatedLongBreak ? setLongBreak(Number(updatedLongBreak) * 60) : null;
		onCloseModal();
		toast.success('O(s) seu(s) tempos foram alterados com sucesso');
	}

	useEffect(() => {
		if (updatedPomodoro || updatedShortBreak || updatedLongBreak){
			setHasError(false);
		}
	}, [updatedPomodoro, updatedShortBreak,  updatedLongBreak]);

	return (
		<Overlay>
			<ContainerModal>
				<HeaderModal>
					<strong>Ajustes</strong>
					<button onClick={onCloseModal} className="close">
						<IoMdClose color="#0DB551" size={25}/>
					</button>
				</HeaderModal>

				<ContainerFields>
					<form onSubmit={handleSubmit}>
						<div className='field'>
							<label htmlFor="pomodoro"> Pomodoro </label>
							<input
								min="1"
								type="number"
								id="pomodoro"
								onChange={handleUpdatedPomodoro}
								value={updatedPomodoro}/>
						</div>

						<div className='field'>
							<label htmlFor="break"> Pausa </label>
							<input
								min="1"
								type="number"
								id="break"
								onChange={handleUpdatedShortBreak}
								value={updatedShortBreak}/>
						</div>

						<div className='field'>
							<label htmlFor="long-break"> Longa Pausa </label>
							<input
								min="1"
								type="number"
								id="long-break"
								onChange={handleLongBreak}
								value={updatedLongBreak}/>
						</div>

						<button type='submit'>Alterar</button>
					</form>
					{hasError && <span className='error'>Preencha um dos campos !</span>}
				</ContainerFields>
			</ContainerModal>
		</Overlay>
	) ;
}