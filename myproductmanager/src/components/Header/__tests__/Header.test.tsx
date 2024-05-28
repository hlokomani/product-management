import { render, screen } from '@testing-library/react';
import Header from '../Header';
import React from 'react';

describe('Header', () => {
  test('renders header title', () => {
    render(<Header />);
    const headerTitle = screen.getByText('Product Management App');
    expect(headerTitle).toBeInTheDocument();
  });
});