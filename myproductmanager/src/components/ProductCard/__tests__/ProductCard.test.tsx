import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockUseRouter = useRouter as jest.Mock;

describe('ProductCard', () => {
  const product = {
    Id: 1,
    Name: 'Test Product',
    Category: 2,
    Price: 100,
  };

  beforeEach(() => {
    mockUseRouter.mockReset();
  });

  it('renders the product details', () => {
    render(<ProductCard product={product} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Category: 2')).toBeInTheDocument();
    expect(screen.getByText('R100')).toBeInTheDocument();
  });

  it('navigates to product details page on button click', () => {
    const push = jest.fn();
    mockUseRouter.mockReturnValue({ push });

    render(<ProductCard product={product} />);
    
    fireEvent.click(screen.getByText('View Details'));
    
    expect(push).toHaveBeenCalledWith('/products/1');
  });
});
