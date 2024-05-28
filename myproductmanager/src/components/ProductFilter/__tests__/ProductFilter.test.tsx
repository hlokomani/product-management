import { render, screen, fireEvent } from '@testing-library/react';
import ProductFilter from '../ProductFilter';
import React from 'react';

describe('ProductFilter', () => {
  test('renders filter input', () => {
    render(<ProductFilter filter="" setFilter={() => {}} orderBy="" setOrderBy={() => {}} ascending={true} setAscending={() => {}} />);
    const filterInput = screen.getByPlaceholderText('Search for products...');
    expect(filterInput).toBeInTheDocument();
  });

  test('updates filter value on input change', () => {
    const setFilter = jest.fn();
    render(<ProductFilter filter="" setFilter={setFilter} orderBy="" setOrderBy={() => {}} ascending={true} setAscending={() => {}} />);
    const filterInput = screen.getByPlaceholderText('Search for products...');
    fireEvent.change(filterInput, { target: { value: 'test' } });
    expect(setFilter).toHaveBeenCalledWith('test');
  });
});