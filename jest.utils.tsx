import { DiProvider, injectable, Injectable } from 'react-magnetic-di';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { useRouteError } from 'react-router-dom';

const commonDeps: Injectable[] = [
	injectable(useRouteError, () => {
		return {
			status: 418,
			data: 'I\'m a teapot',
		};
	}),
];

export const renderWithDeps = (component: ReactNode) => {
	return render(
		<DiProvider use={commonDeps}>
			{component}
		</DiProvider>
	);
};
