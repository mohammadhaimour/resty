import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';



test('load and dispaly App', async () => {
    render(<App />);
    const header = await waitFor(() => screen.getByTestId('header'));
    expect(header).toHaveTextContent('RESTy');
})
