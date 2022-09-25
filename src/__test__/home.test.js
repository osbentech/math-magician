const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const Home = require('../home').default;

describe('Tests for Home Component', () => {
  it('Renders Home page', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });

  it('Test if the welcome header exists', () => {
    render(<Home />);
    expect(
      screen.getByText(
        /Welcome to my homepage!/i,
      ),
    ).toBeInTheDocument();
  });
});
