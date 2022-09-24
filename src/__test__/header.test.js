const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const { BrowserRouter: Router } = require('react-router-dom');
const Header = require('../header').default;

describe('Test the header component', () => {
  test('Renders header component correctly', () => {
    const header = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(header).toMatchSnapshot();
  });

});