import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Score from './Score';

describe('<Score />', () => {
  test('it should mount', () => {
    render(<Score score={2}/>);
    
    const score = screen.getByTestId('Score');

    expect(score).toBeInTheDocument();
  });
  test('it should show correct score value', () => {
    const initialScore = 3

    render(<Score score={initialScore}/>);

    expect(screen.getByTestId('Score')).toHaveTextContent(`Score: ${initialScore}`);
  });
});