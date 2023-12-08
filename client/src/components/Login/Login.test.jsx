/* eslint-disable no-undef */

import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AuthContext } from '../../contexts/AuthContext.jsx';

import Login from './Login.jsx';

const user = { email: 'peter@abv.bg', password: '123456' };

beforeEach(() => {
    render(
        <AuthContext.Provider value={user}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </AuthContext.Provider>
    );
});

describe('Login Component', () => {
    it('should render login form', () => {
        expect(screen.getByText('Влезте в профила си')).toBeInTheDocument();
        expect(screen.getByLabelText('Имейл')).toBeInTheDocument();
        expect(screen.getByLabelText('Парола')).toBeInTheDocument();
        expect(screen.getByText('Влезте')).toBeInTheDocument();
        expect(screen.getByText('Регистрирайте се')).toBeInTheDocument();
    });

    it('should have disabled attribute on loginBtn as empty string with correct input', async () => {
        const email = screen.getByLabelText('Имейл');
        const password = screen.getByLabelText('Парола');
        const loginBtn = screen.getByText('Влезте');
        
        userEvent.type(email, 'peter@abv.bg');
        userEvent.type(password, '123456');

        await waitFor(() => {
        expect(loginBtn).toHaveAttribute('disabled', '');
        });
    });

    it('should have disabled attribute on loginBtn with wrong input', async () => {
        const email = screen.getByLabelText('Имейл');
        const password = screen.getByLabelText('Парола');
        const loginBtn = screen.getByText('Влезте');
        
        userEvent.type(email, 'rosen@abv.bg');
        userEvent.type(password, '123');

        await waitFor(() => {
        expect(loginBtn).toHaveAttribute('disabled');
        });
    });

    it('should NOT show errors with valid email and password', async () => {
        const email = screen.getByLabelText('Имейл');
        const password = screen.getByLabelText('Парола');

        userEvent.type(email, 'peter@abv.bg');
        userEvent.type(password, '123456');

        await waitFor(() => {
            const error1 = screen.queryByText('Полето е задължително !');
            const error2 = screen.queryByText('Невалиден формат !');
            expect(error1).not.toBeInTheDocument();
            expect(error2).not.toBeInTheDocument();
        });
    });

    it('should show error with invalid email format', async () => {
        const email = screen.getByLabelText('Имейл');
        const password = screen.getByLabelText('Парола');

        userEvent.type(email, 'aaaaa');
        userEvent.tab(email);
        userEvent.type(password, '123456');

        await waitFor(() => {
            const error = screen.queryByText('Невалиден формат !');
            expect(error).toBeInTheDocument();
        });
    });

    // it('should show error with wrong password', async () => {
    //     const email = screen.getByLabelText('Имейл');
    //     const password = screen.getByLabelText('Парола');

    //     userEvent.type(email, 'peter@abv.bg');
    //     userEvent.type(password, '123');
    //     userEvent.tab(password);

    //     await waitFor(() => {
    //         const error = screen.getByText('Минимум 6 символа !');
    //         expect(error).toBeInTheDocument();
    //     });
    // });

    it('should redirect to register page', () => {
        const registerBtn = screen.getByText('Регистрирайте се');

        userEvent.click(registerBtn);

        expect(window.location.pathname).toEqual('/');
    });

    it('should toggle password visibility correctly', async () => {
        const passwordInput = screen.getByLabelText('Парола');
        const toggleButton = screen.getByTestId('togglePassword');
    
        expect(passwordInput.type).toBe('password');
    
        userEvent.click(toggleButton);
    
        await waitFor(() => {
          expect(passwordInput.type).toBe('text');
        });
    
        userEvent.click(toggleButton);
    
        await waitFor(() => {
          expect(passwordInput.type).toBe('password');
        });
      });

});