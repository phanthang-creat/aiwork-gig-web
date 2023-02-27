import React, { PropsWithChildren } from 'react';

interface PopupContextProps {
	isPopup: boolean;
	handlePopup: () => void;
	handleForcePopup: (isPopup: boolean) => void;
	handleSetContent: (content: React.ReactNode) => void;
	popupContent: React.ReactNode;
}

export const PopupContext = React.createContext<PopupContextProps>({
	isPopup: false,
	handlePopup: () => {},
	popupContent: <></>,
	handleForcePopup: () => {},
	handleSetContent: () => {},
});

interface PopupProviderProps extends PropsWithChildren {}

export const PopupProvider: React.FunctionComponent<PopupProviderProps> = ({ children }) => {
	const [isPopup, setIsPopup] = React.useState(false);
	const [popupContent, setPopupContent] = React.useState<React.ReactNode>(<></>);

	const _handlePopup = () => {
		setIsPopup((prev) => !prev);
	};

	const _handleForcePopup = (isPopup: boolean) => {
		setIsPopup(isPopup);
	};

	const _handleSetContent = (content: React.ReactNode) => {
		setPopupContent(content);
	};

	React.useEffect(() => {
		if (isPopup) {
			document.body.style.overflowY = 'hidden';
			document.body.className = '';
			return;
		}
		document.body.style.overflowY = 'auto';
		document.body.className = 'scrollbar-thumb-gray-200 scrollbar-thin';
	}, [isPopup]);

	return (
		<PopupContext.Provider
			value={{
				isPopup,
				handlePopup: _handlePopup,
				popupContent,
				handleForcePopup: _handleForcePopup,
				handleSetContent: _handleSetContent,
			}}
		>
			{isPopup && (
				<div id="parent-popup" className="fixed top-0 left-0 z-[11] w-full h-full ">
					{popupContent}
				</div>
			)}
			{children}
		</PopupContext.Provider>
	);
};

export const usePopupContext = () => {
	const methods = React.useContext(PopupContext);

	return { ...methods };
};
