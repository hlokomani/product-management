import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar';
import { useRouter } from 'next/navigation';

// Mock the next/navigation useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Sidebar', () => {
  const pushMock = jest.fn();

  beforeAll(() => {
    // Mock the useRouter to return the push function
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
  });

  afterEach(() => {
    // Clear all mock calls after each test
    pushMock.mockClear();
  });

  test('renders Browse Products link', () => {
    render(<Sidebar />);
    const browseProductsLink = screen.getByText('Browse Products');
    expect(browseProductsLink).toBeInTheDocument();
  });

  test('navigates to /products when Browse Products link is clicked', () => {
    render(<Sidebar />);
    const browseProductsLink = screen.getByText('Browse Products');
    fireEvent.click(browseProductsLink);
    expect(pushMock).toHaveBeenCalledWith('/products');
  });
});
