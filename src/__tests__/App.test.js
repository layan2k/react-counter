import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'

describe('Counter App', () => {
it('should render the counter initially at 0', () => {
    render(<App />);

    const countContainer = screen.getByText('0');

    expect(countContainer).toBeInTheDocument();
});

it('should increase the counter by 1 when the increment button is clicked', () => {
    render(<App />);

    const incrementButton = screen.getByText('+');

    fireEvent.click(incrementButton);

    const countContainer = screen.getByText('1');

    expect(countContainer).toBeInTheDocument();
});

it('should decrease the counter by 1 when the decrement button is clicked', () => {
    render(<App />);

    const decrementButton = screen.getByText('-');

    fireEvent.click(decrementButton);

    const countContainer = screen.getByText('0');

    expect(countContainer).toBeInTheDocument();
});

it('should reset the counter to 0 when the reset button is clicked', () => {
    render(<App />);

    const incrementButton = screen.getByText('+');

    fireEvent.click(incrementButton);

    const resetButton = screen.getByText('Reset Button');

    fireEvent.click(resetButton);

    const countContainer = screen.getByText('0');

    expect(countContainer).toBeInTheDocument();
});
});
