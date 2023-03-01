import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ClickMe from './ClickMe';

describe('ClickMe', () => {
  beforeEach(() => {
    render(<ClickMe />);
  })
  it('should render default text', () => {
    expect(screen.getByText(/foobar/i)).toBeDefined()
  });

  it('should on click render new text', async() => {
    userEvent.click(screen.getByRole('button', {name: /click me/i}))

    // Using query by won't show the function as being tested in coverage
    // expect(screen.queryByText(/random string/i))
    expect(await screen.findByText(/random string/i))
  })
});