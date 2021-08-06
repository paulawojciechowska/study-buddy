import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';

faker.seed(123);

const groups = ['A', 'B', 'C'];
const eventTypes = ['workshop', 'exam', 'lecture'];
const getRandomAverage = () => faker.datatype.number({ min: 2, max: 5, precision: 0.1 });
const getRandomValue = (array, index) => array[index];

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}`,
    average: getRandomAverage,
    group: () => getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    course: () => faker.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
    grades: () => [
      {
        subject: 'Modern Economy',
        average: getRandomAverage(),
      },
      {
        subject: 'Trade and Logistis',
        average: getRandomAverage(),
      },
      {
        subject: 'Business Philosophy',
        average: getRandomAverage(),
      },
    ],
  },
  group: {
    id: primaryKey(String),
  },
  event: {
    id: primaryKey(faker.datatype.uuid),
    type: () => getRandomValue(eventTypes, faker.datatype.number({ min: 0, max: 1 })),
    group: () => getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    subject: () => faker.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
    date: faker.date.soon,
  },
  teacher: {
    id: primaryKey(() => '1'),
    name: () => 'Alicja Misiak',
    login: () => 'alicja@teacher.com',
    password: () => 'password123',
  },
  note: {
    id: primaryKey(faker.datatype.uuid),
    title: () => 'Lorem ipsum dolor sit amet',
    content: () => 'Lorem ipsum dolor sit amet',
  },
});
