import { Overlay, ContainerModal, HeaderModal, ContainerFields } from './styles';
import { IoMdClose } from 'react-icons/io';

interface ModalSettingsProps {
  onCloseModal(): void
}

export default function ModalSettings({onCloseModal}: ModalSettingsProps) {
	return (
		<Overlay>
			<ContainerModal>
				<HeaderModal>
					<strong>Tempo pomodoro</strong>
					<button onClick={onCloseModal} className="close">
						<IoMdClose color="0DB551" size={25}/>
					</button>
				</HeaderModal>

				<ContainerFields>
					<form>
						<div className='field'>
							<label htmlFor="pomodoro"> Tempo desejado : </label>
							<input min="1" type="number" id="pomodoro" />
						</div>

						<button type='submit'>Alterar</button>
					</form>
				</ContainerFields>
			</ContainerModal>
		</Overlay>
	) ;
}