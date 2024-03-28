import { useEffect } from 'react';
import { Router, Routes } from 'react-router-dom';
import './App.css';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import useTelegram from './hooks/useTelegram';

function App() {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, [tg]);

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Router index element={<ProductList />} />
				<Router path={'form'} element={<Form />} />
			</Routes>
		</div>
	);
}

export default App;
