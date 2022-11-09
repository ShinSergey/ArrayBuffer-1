import Daemon from '../Daemon';

test('Create Daemon', () => {
  const received = new Daemon('Bob', 'Daemon');
  const expected = {
    name: 'Bob',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 100,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
