import 'Header.css';
import { Button } from '../Button/Button';

export const Header = () => {
	const tg = window.Telegram.WebApp;

	const onClose = () => {
		tg.close();
	};

	return (
		<div className='header'>
			<div>
				<Button onClick={onClose}>Close</Button>
				<span className='username'>{this.initDataUnsafe?.user?.username}</span>
			</div>
		</div>
	);
};
