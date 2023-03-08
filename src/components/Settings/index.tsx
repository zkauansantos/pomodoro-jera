import { ButtonSettings, Container } from './styles';
import {IoIosSettings} from 'react-icons/io';

interface SettingsProps {
  onOpenModal() : void
}

export default function Settings({onOpenModal}: SettingsProps) {
	return (
		<Container>
			<ButtonSettings onClick={onOpenModal}>
				<IoIosSettings size={35} color="#0DB551"/>
			</ButtonSettings>
		</Container>
	);
}