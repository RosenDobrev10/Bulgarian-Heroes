/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';

import Footer from './Footer.jsx';

describe('Footer Component', () => {
    
    it('should render anchor with text "Росен Добрев".', () => {
        render(<Footer />);
        const name = screen.getByText('Росен Добрев.');
        expect(name).toBeInTheDocument();
    });

    it('should render anchor with correct URL for GitHub as href attribute', () => {
        render(<Footer />);
        const anchor = screen.getByText('Росен Добрев.');
        expect(anchor).toHaveAttribute('href', 'https://github.com/RosenDobrev10');
    });
    
    it('should render span with text "Всички права запазени."', () => {
        render(<Footer />);
        const allRightReserved = screen.getByText('Всички права запазени.');
        expect(allRightReserved).toBeInTheDocument();
    });

});