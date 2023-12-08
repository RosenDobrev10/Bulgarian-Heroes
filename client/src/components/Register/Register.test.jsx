/* eslint-disable no-undef */

import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect } from 'vitest';

import { AuthContext } from '../../contexts/AuthContext.jsx';

import Register from './Register.jsx';

const user = { email: 'peter@abv.bg', password: '123456' };

beforeEach(() => {
	render(
		<AuthContext.Provider value={user}>
			<BrowserRouter>
				<Register />
			</BrowserRouter>
		</AuthContext.Provider>
	);
});

afterEach(() => {
    cleanup();
});

describe('Register Component', () => {
	it('should render register form', () => {
		expect(screen.getAllByText('Регистрирайте се')[0]).toBeInTheDocument();
		expect(screen.getByLabelText('Имейл')).toBeInTheDocument();
		expect(screen.getByLabelText('Парола')).toBeInTheDocument();
		expect(screen.getByLabelText('Потвърди паролата')).toBeInTheDocument();
		expect(screen.getAllByText('Регистрирайте се')[1]).toBeInTheDocument();
		expect(screen.getByText('Влезте')).toBeInTheDocument();
	});

	it('should have disabled attribute on registerBtn as empty string with correct input', async () => {
		const email = screen.getByLabelText('Имейл');
		const password = screen.getByLabelText('Парола');
		const repass = screen.getByLabelText('Потвърди паролата');
		const registerBtn = screen.getAllByText('Регистрирайте се')[1];

		userEvent.type(email, 'peter@abv.bg');
		userEvent.type(password, '123456');
		userEvent.type(repass, '123456');

		await waitFor(() => {
			expect(registerBtn).toHaveAttribute('disabled', '');
		});
	});

	it('should have disabled attribute on registerBtn with wrong input', async () => {
		const email = screen.getByLabelText('Имейл');
		const password = screen.getByLabelText('Парола');
		const repass = screen.getByLabelText('Потвърди паролата');
        const registerBtn = screen.getAllByText('Регистрирайте се')[1];

		userEvent.type(email, 'rosen@abv.bg');
		userEvent.type(password, '12345');
		userEvent.type(repass, '12345');

		await waitFor(() => {
			expect(registerBtn).toHaveAttribute('disabled');
		});
	});

	it('should NOT show errors with valid email, password and repass', async () => {
		const email = screen.getByLabelText('Имейл');
		const password = screen.getByLabelText('Парола');
		const repass = screen.getByLabelText('Потвърди паролата');

		userEvent.type(email, 'peter@abv.bg');
		userEvent.type(password, '123456');
		userEvent.type(repass, '123456');

		await waitFor(() => {
			const error1 = screen.queryByText('Полето е задължително !');
			const error2 = screen.queryByText('Невалиден формат !');
			const error3 = screen.queryByText('Паролите не съвпадат !');
			expect(error1).not.toBeInTheDocument();
			expect(error2).not.toBeInTheDocument();
			expect(error3).not.toBeInTheDocument();
		});
	});

	it('should show error with invalid email format', async () => {
		const email = screen.getByLabelText('Имейл');
		const password = screen.getByLabelText('Парола');
		const repass = screen.getByLabelText('Потвърди паролата');

		userEvent.type(email, 'aaaaa');
		userEvent.tab(email);
		userEvent.type(password, '123456');
		userEvent.type(repass, '123456');

		await waitFor(() => {
			const error = screen.queryByText('Невалиден формат !');
			expect(error).toBeInTheDocument();
		});
	});

	// it('should show error with invalid password', async () => {
	// 	const email = screen.getByLabelText('Имейл');
	// 	const password = screen.getByLabelText('Парола');
	// 	const repass = screen.getByLabelText('Потвърди паролата');

	// 	userEvent.type(email, 'peter@abv.bg');
	// 	userEvent.type(password, '12345');
	// 	userEvent.tab(password);
	// 	userEvent.type(repass, '123456');

	// 	await waitFor(() => {
	// 		const error = screen.queryByText('Минимум 6 символа !');
	// 		expect(error).toBeInTheDocument();
	// 	});
	// });

	it('should redirect to login page', () => {
		const loginBtn = screen.getByText('Влезте');

		userEvent.click(loginBtn);

		expect(window.location.pathname).toEqual('/');
	});

	it('should toggle password visibility correctly', async () => {
		const password = screen.getByLabelText('Парола');
		const toggleButton = screen.getByTestId('togglePassword');

		expect(password.type).toBe('password');

		userEvent.click(toggleButton);

		await waitFor(() => {
			expect(password.type).toBe('text');
		});

		userEvent.click(toggleButton);

		await waitFor(() => {
			expect(password.type).toBe('password');
		});
	});

    it('should toggle Confirm Password visibility correctly', async () => {
		const repass = screen.getByLabelText('Потвърди паролата');
		const toggleButton = screen.getByTestId('toggleConfirmPassword');

		expect(repass.type).toBe('password');

		userEvent.click(toggleButton);

		await waitFor(() => {
			expect(repass.type).toBe('text');
		});

		userEvent.click(toggleButton);

		await waitFor(() => {
			expect(repass.type).toBe('password');
		});
	});

});
