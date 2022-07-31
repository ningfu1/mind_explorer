import { render, screen } from '@testing-library/react';
import App from './App';
import Quiz from './routes/quiz.route';
import Result from './routes/result.route';

test('runs the landing screen', async () => {
  render(<App />);
  const startElement = screen.getByText(/Start Personality Test/i);
  expect(startElement).toBeInTheDocument();
});

test('starts quiz', () => {
  render(<Quiz />);
  const step = screen.getByText(/Step/i);
  expect(step.innerHTML).toBe('Step 0');
});

test('renders the result page', () => {
  render(<Result value="introverted" />);
  const val = screen.getByText(/introverted/i);
  expect(val.innerHTML).toContain('introverted');
});
