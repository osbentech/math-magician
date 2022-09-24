import calculate from '../logic/calculate';

describe('unit test on calculate component ', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  test('Uses the correct operator', () => {
    expect(calculate(obj, '+').operation).toBe('+');
  });

  test('Uses the correct operator', () => {
    expect(calculate(obj, '÷').operation).toBe('÷');
  });

  test('Perform calculation correctly "10 + 5"', () => {
    obj.next = 10;
    expect(calculate(calculate(calculate(calculate(obj, 'null'), '+'), '5'), '=').total).toBe('15');
  });

  test('AC with input', () => {
    obj.total = 30;
    obj.next = 20;
    obj.operation = '-';

    const result = calculate(obj, 'AC');
    expect(result.total).toBe(null);
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });

  test('+/- with no input', () => {
    obj.total = null;
    obj.next = null;
    obj.operation = null;

    const result = calculate(obj, '+/-');
    expect(result).toMatchObject({});
  });

  test('+/- with positive input', () => {
    obj.total = 5;

    const result = calculate(obj, '+/-');
    expect(result.total).toBe('-5');
  });

  test('+/- with  -ve input', () => {
    obj.total = -5;

    const result = calculate(obj, '+/-');
    expect(result.total).toBe('5');
  });
});
