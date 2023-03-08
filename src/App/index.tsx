import { GlobalStyles } from '../assets/styles/GlobalStyles';
import Home from '../pages/Home';
import { ThemeProvider } from 'styled-components';
import { theme }from '../assets/theme/default';
import TimerProvider from '../context/TimerContext';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles/>
			<TimerProvider>
				<Home />
			</TimerProvider>
		</ThemeProvider>
	);
}