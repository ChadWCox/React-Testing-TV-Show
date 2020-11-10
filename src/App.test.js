import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { data } from './api/mockData';
import { fetchShow as mockFetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow')


test('renders without errors', async () => {
    mockFetchShow.mockResolvedValueOnce(data)
    render(<App />);
});

test('fetches data and renders data', async () => {
    mockFetchShow.mockResolvedValueOnce(data)
    render(<App />);

    const dropdown = await screen.findByText(/select a season/i);
    userEvent.click(dropdown);

    const seasonOne = await screen.findByText(/season 1/i);
    userEvent.click(seasonOne);
    await screen.findByText(/chapter one: the vanishing of will byers/i)
})