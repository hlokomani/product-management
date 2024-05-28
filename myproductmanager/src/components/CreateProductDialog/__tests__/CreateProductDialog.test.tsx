import { render, screen, fireEvent } from '@testing-library/react';
import CreateProductDialog from '../CreateProductDialog';
import React from 'react';

describe('CreateProductDialog', () => {
  it('renders create product button', () => {
    render(<CreateProductDialog />);
    const createButton = screen.getByText('Create Product');
    expect(createButton).toBeInTheDocument();
  });

  it('opens dialog on button click', () => {
    render(<CreateProductDialog />);
    const createButton = screen.getByText('Create Product');
    fireEvent.click(createButton);
    const dialogTitle = screen.getByText('Create New Product');
    expect(dialogTitle).toBeInTheDocument();
  });

  it('displays error when fields are empty', () => {
    render(<CreateProductDialog />);
    const createButton = screen.getByText('Create Product');
    fireEvent.click(createButton);
    const createProductButton = screen.getByText('Create');
    fireEvent.click(createProductButton);
    const errorMessage = screen.getByText('All fields are required.');
    expect(errorMessage).toBeInTheDocument();
  });
});
