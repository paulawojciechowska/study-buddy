import UserListItem from './UsersListItem';

/* eslint-disable */
export default {
  title: 'Components/Molecules/UserListItem',
  component: UserListItem,
};
/* eslint-enable */

const Template = (args) => <UserListItem {...args} />;

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: {
    name: 'Kamila Kowalik',
    attendance: '58%',
    average: '3.5',
  },
};
export const GoodMarks = Template.bind({});
GoodMarks.args = {
  userData: {
    name: 'Alina Malina',
    attendance: '78%',
    average: '4.8',
  },
};
export const BadMarks = Template.bind({});
BadMarks.args = {
  userData: {
    name: 'Alina Malina',
    attendance: '78%',
    average: '2.0',
  },
};
export const NoAverage = Template.bind({});
NoAverage.args = {
  userData: {
    name: 'Alina Malina',
    attendance: '78%',
    average: null,
  },
};
