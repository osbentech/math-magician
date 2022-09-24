const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const Quote = require('../quote').default;

describe('Tests for Quote component', () => {
  it('Render Quote page', () => {
    const quote = render(<Quote />);
    expect(quote).toMatchSnapshot();
  });

  it("Test if the quote by Benjamin Osegbo exists", () => {
    render(<Quote />);
    expect(
      screen.getByText(
        /extraodinary is where brain meets magic/i,
      ),
    ).toBeInTheDocument();
  });
});
