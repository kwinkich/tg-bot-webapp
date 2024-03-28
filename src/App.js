import { useEffect } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import useTelegram from './hooks/useTelegram';

function App() {
	const { tg, onToggleButton } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, [tg]);

	return (
		<div className='App'>
			<Button onClick={onToggleButton}>toggle</Button>
		</div>
	);
}

export default App;
