import { useState } from 'react';
import useTelegram from '../../hooks/useTelegram';
import { ProductItem } from '../ProductItem/ProductItem';
import './ProductList.css';

const products = [
	{ id: '1', title: 'tovar1', price: 100, description: 'desc1' },
	{ id: '2', title: 'tovar2', price: 200, description: 'desc2' },
	{ id: '3', title: 'tovar3', price: 300, description: 'desc3' },
	{ id: '4', title: 'tovar4', price: 400, description: 'desc4' },
	{ id: '5', title: 'tovar5', price: 500, description: 'desc5' },
	{ id: '6', title: 'tovar6', price: 600, description: 'desc6' },
];

const getTotalPrice = (items) => {
	return items.reduce((acc, item) => {
		return (acc += item.price);
	}, 0);
};

export const ProductList = () => {
	const [addedItems, setAddedItems] = useState([]);
	const { tg } = useTelegram();

	const onAdd = (product) => {
		const alreadyAdded = addedItems.find((item) => item.id === product.id);
		let newItems = [];

		if (alreadyAdded) {
			newItems = addedItems.filter((item) => item.id !== product.id);
		} else {
			newItems = [...addedItems, product];
		}

		setAddedItems(newItems);

		if (newItems.length === 0) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
			tg.MainButton.setParams({
				text: `Купить ${getTotalPrice(newItems)}`,
			});
		}
	};

	return (
		<div className='lsit'>
			{products.map((item) => (
				<ProductItem product={item} onAdd={onAdd} className={'item'} />
			))}
		</div>
	);
};
