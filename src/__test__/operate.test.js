const operate = require('../logic/operate').default;

describe('Test-suite for Calculte file', () => {
  test('given 1- 10 and return 4', () => {
    expect(operate(1, 10, '-')).toEqual('-9');
  });
  test('given 3 x 10 and return 30', () => {
    expect(operate(3, 10, 'x')).toEqual('30');
  });
  test('input 10 + 1 and return 11', () => {
    expect(operate(10, 1, '+')).toEqual('11');
  });
  test('input 10 % 5 and return 2', () => {
    expect(operate(10, 5, '%')).toEqual('0');
  });
  test('input 10 % 0 and return "Can\'t find modulo as can\'t divide by 0."', () => {
    expect(operate(10, 0, '%')).toEqual('Can\'t find modulo as can\'t divide by 0.');
  });
  test('input 10 / 2 and return 5', () => {
    expect(operate(10, 2, '÷')).toEqual('5');
  });
  test('input 10 / 0 and return "Can\'t divide by 0."', () => {
    expect(operate(8, 0, '÷')).toEqual('Can\'t divide by 0.');
  });
});
