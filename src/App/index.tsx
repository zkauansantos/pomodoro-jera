import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import Home from '../pages/Home';
import TimerProvider from '../context/TimerContext';

import { theme }from '../assets/theme/default';
import { GlobalStyles } from '../assets/styles/GlobalStyles';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<ToastContainer position='bottom-center'/>
			<GlobalStyles/>
			<TimerProvider>
				<Home />
			</TimerProvider>
		</ThemeProvider>
	);
}