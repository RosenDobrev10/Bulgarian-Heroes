/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import { vi } from 'vitest';

import Header from './Header.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Tab, initTE } from 'tw-elements';
initTE({ Tab });

describe('Header Component', () => {
	it('should render correct links, when user is not logged in', () => {
		vi.mock('../../contexts/AuthContext.jsx', () => {
			
		});

		vi.mock('tw-elements', () => {
			return {
				initTE: vi.fn(),
				Tab: vi.fn()
			};
		});

		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);

		const homeLink = screen.getByText('Начало');
		const heroesLink = screen.getByText('Герои');
		const searchLink = screen.getByText('Търси');
		const loginLink = screen.getByText('Вход');
		const registerLink = screen.getByText('Регистрация');
		expect(homeLink).toBeInTheDocument();
		expect(heroesLink).toBeInTheDocument();
		expect(searchLink).toBeInTheDocument();
		expect(loginLink).toBeInTheDocument();
		expect(registerLink).toBeInTheDocument();
	});
});
