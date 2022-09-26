const { render, screen, fireEvent } = require('@testing-library/react');
require('@testing-library/jest-dom');
const Calculator = require('../components/Calculator').default;

describe('Tests for Calculator component', () => {
  it('Renders Calculator page', () => {
    const calculator = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
  });

});