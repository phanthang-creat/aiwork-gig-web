import * as React from 'react';

interface MainLayoutProps extends React.PropsWithChildren {}

export const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children }) => {
	return <div className="relative flex flex-col w-full min-h-screen bg-white">{children}</div>;
};
