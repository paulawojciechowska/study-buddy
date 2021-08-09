import StudentsDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from './Modal';

/* eslint-disable */
export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
};
/* eslint-enable */

const Template = (args) => (
  <Modal {...args}>
    <StudentsDetails
      student={{
        id: '1',
        name: 'Adam Romański',
        attendance: '39%',
        average: '2.3',
        group: 'A',
        grades: [
          {
            subject: 'Modern Economy',
            average: '4.4',
          },
          {
            subject: 'Trade and Logistis',
            average: '3.7',
          },
          {
            subject: 'Business Philosophy',
            average: '2.8',
          },
        ],
      }}
    />
  </Modal>
);

export const Default = Template.bind({});
