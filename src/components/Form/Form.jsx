import { useState } from 'react';
import './Form.css';

export const Form = () => {
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [subject, setSubject] = useState('physical');

	const onChangeCountry = (e) => {
		setCountry(e.target.value);
	};

	const onChangeCity = (e) => {
		setCity(e.target.value);
	};

	const onChangeSubject = (e) => {
		setSubject(e.target.value);
	};

	return (
		<div className='form'>
			<h3>Enter your data</h3>
			<input
				className='input'
				type='text'
				placeholder='Country'
				value={country}
				onChange={onChangeCountry}
			/>
			<input
				className='input'
				type='text'
				placeholder='City'
				value={city}
				onChange={onChangeCity}
			/>
			<select value={subject} onChange={onChangeSubject} className='select'>
				<option value='physical'>Физ. лицо</option>
				<option value='legal'>Юр лицо</option>
			</select>
		</div>
	);
};
