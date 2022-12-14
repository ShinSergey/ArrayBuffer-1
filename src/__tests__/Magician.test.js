import Magician from '../Magician';

test('Create Magician', () => {
  const received = new Magician('Bob', 'Magician');
  const expected = {
    name: 'Bob',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 100,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
