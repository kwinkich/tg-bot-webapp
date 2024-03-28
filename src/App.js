import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'; // Используем BrowserRouter вместо Router
import './App.css';
import { Form } from './components/Form/Form.jsx';
import { Header } from './components/Header/Header.jsx';
import { ProductList } from './components/ProductList/ProductList.jsx';
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
				<Route path='/' element={<ProductList />} />
				<Route path='/form' element={<Form />} />
			</Routes>
		</div>
	);
}

export default App;
