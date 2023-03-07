import { GlobalStyles } from '../assets/styles/GlobalStyles';
import Home from '../pages/Home';
import { ThemeProvider } from 'styled-components';
import { theme }from '../assets/theme/default';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles/>
			<Home />
		</ThemeProvider>
	);
}