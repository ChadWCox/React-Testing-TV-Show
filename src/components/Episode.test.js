import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';
import { data } from '../api/mockData'
jest.mock('../api/fetchShow');

test('renders episodes without errors', async () =>{
    render(<Episodes episodes={data.data._embedded.episodes} />)
});

test('fetches data and renders data', async () => {
    render(<Episodes episodes={data.data._embedded.episodes} />)
    expect(screen.queryAllByTestId('episode')).toHaveLength(3);
})