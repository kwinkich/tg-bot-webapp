const tg = window.Telegram.WebApp;

export default function useTelegram() {
	const onClose = () => {
		tg.close();
	};

	const onToggleButton = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	};

	return {
		onClose,
		onToggleButton,
		tg,
		user: tg.initDataUnsafe?.user,
		queryId: tg.initDataUnsage?.query_id,
    id: tg.user?.id,
	};
}
