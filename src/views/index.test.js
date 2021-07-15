const add = (a, b) => a + b;

const users = ['roman', 'alina', 'kasia'];
it('Adds two value', () => {
  expect(add(2, 4)).not.toBe(7);
  expect(users).toContain('roman');
  expect(users).not.toContain('apple');
});
