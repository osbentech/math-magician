const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const quote = require('../quote').default;

describe('Tests for Quote component', () => {
  it('Render Quote page', () => {
    const quote = render(<quote />);
    expect(quote).toMatchSnapshot();
  });

});